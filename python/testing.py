  
import speech_recognition as sr
import sys

r = sr.Recognizer()
with sr.Microphone() as source:
    print("Speak Anything :")
    sys.stdout.flush()
    audio = r.listen(source)
    try:
        x = ""
        text = r.recognize_google(audio)
        if (text.lower() == 'if'):
            x = 'if(condition):\n'
        elif(text.lower == 'enter'):
            x = '\n'
        else:
            x = text
        print("{}".format(x))
        sys.stdout.flush()
    except:
        print("Sorry could not recognize what you said")
        sys.stdout.flush()