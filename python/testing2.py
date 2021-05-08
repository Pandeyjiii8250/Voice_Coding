import speech_recognition as sr
import sys 
r = sr.Recognizer()
mic = sr.Microphone()
while True:
    with mic as source:
        try:
            r.adjust_for_ambient_noise(source, duration=2)
            print("Speak Anything :")
            sys.stdout.flush()
            audio = r.listen(source)
            print("converting wait")
            sys.stdout.flush()
            text = r.recognize_google(audio)
            if(text != 'exit'):
                print(text)
                sys.stdout.flush()
            else:
                break
        except sr.RequestError:
            print("Limits are met")
            sys.stdout.flush()
        except sr.UnknownValueError:
            print("Could not identify")
            sys.stdout.flush()
        except:
            print("Error occured")
            sys.stdout.flush()

