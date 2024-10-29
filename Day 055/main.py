# pip install textblob
# python -m textblob.download_corpora
# pip install deep-translator

from textblob import TextBlob
from deep_translator import GoogleTranslator

def translate_to_english (text):
    translator = GoogleTranslator(source='pt', target='en')
    translation = translator.translate(text)
    return translation

def analyze_sentiment (text):
    text_in_english = translate_to_english(text)
    blob = TextBlob(text_in_english)
    sentiment = blob.sentiment
    return sentiment

text = "I love programming in python"
result = analyze_sentiment(text)
print(f"Text: {text}\nSentiment: {result}")