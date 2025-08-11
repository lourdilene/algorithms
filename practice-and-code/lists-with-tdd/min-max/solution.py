def get_min_max(readings):
    """
    Return (min_value, max_value) for a non-empty list of integers.
    Raises ValueError for empty input.

    Time: O(n)
    Space: O(1)
    """
    if not readings:
        raise ValueError("readings cannot be empty")

    min_val = max_val = readings[0]
    for x in readings[1:]:
        if x < min_val:
            min_val = x
        elif x > max_val:
            max_val = x
    return (min_val, max_val)
