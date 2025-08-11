import pytest
from solution import get_min_max

def test_typical_dataset():
    readings = [3, 2, 1, 56, 10000, 167]
    assert get_min_max(readings) == (1, 10000)

def test_sorted_increasing():
    readings = [1, 5, 9, 12, 20]
    assert get_min_max(readings) == (1, 20)

def test_sorted_decreasing():
    readings = [50, 40, 30, 20, 10]
    assert get_min_max(readings) == (10, 50)

def test_single_element():
    readings = [56789]
    assert get_min_max(readings) == (56789, 56789)

def test_duplicates():
    readings = [7, 7, 7, 7]
    assert get_min_max(readings) == (7, 7)

def test_large_values_within_constraints():
    readings = [1, 10**9, 999_999_999, 2]
    assert get_min_max(readings) == (1, 10**9)

def test_raises_on_empty_list():
    with pytest.raises(ValueError, match="readings cannot be empty"):
        get_min_max([])
