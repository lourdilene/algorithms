guests = ["Maria", "João", "Ana", "Beatriz", "Pedro"]
print(guests)
guests.insert(0,"Lourdilene")
print(guests)
guests.append("Joana")
print(guests)
guests.pop()
print(guests)
guests.remove("Lourdilene")
print(guests)

print(f"The number of guests is {len(guests)}")