text = input("Enter the text: ")

def count_words(text):
    words = text.split()
    return len(words)

def count_phrases(text):
    phrases = text.split('.') + text.count('!') + text.count('?')
    return phrases

def count_characters(text):
    return len(text)
    
words = count_words(text)
phrases = count_phrases(text)
characters = count_characters(text)

print(f"Number of words: {words}")
print(f"Number of phrases: {phrases}")
print(f"Number of characters: {characters}")
