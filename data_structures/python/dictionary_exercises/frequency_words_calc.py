# Problema: Cálculo de Frequência de Palavras
# Descrição: Crie um algoritmo que conte a frequência de palavras em uma frase fornecida pelo usuário.
# O algoritmo deve ignorar a capitalização e considerar palavras repetidas.

phrase = input('Enter your phrase')

arrayPhrase = phrase.split()

countWordInPhrase = {}

for word in arrayPhrase:
    word_lower = word.lower()
    if word_lower in countWordInPhrase:
        countWordInPhrase[word_lower] += 1
    else:
        countWordInPhrase[word_lower] = 1

print(countWordInPhrase)


