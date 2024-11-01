# Day 56: File Manipulation

# -*- coding: utf-8 -*-
def count_words_in_file(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as file:
            content = file.read()
            words = content.split()
            word_count = len(words)
            print(f"O arquivo '{filename}' contém {word_count} palavras.")
    except FileNotFoundError:
        print(f"O arquivo '{filename}' não foi encontrado.")
    except Exception as e:
        print(f"Ocorreu um erro: {e}")

# File
filename = 'test.txt'

count_words_in_file(filename)

