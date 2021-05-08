import speech_recognition as sr
import sys 
r = sr.Recognizer()
with sr.Microphone() as source:
    print("Speak Anything :")
    sys.stdout.flush()
    audio = r.listen(source)
    text = r.recognize_google(audio)

    if text == "new":
        print("new main created")
        sys.stdout.flush()
        text2=""
        while True:
            re = sr.Recognizer()
            with sr.Microphone() as sourcee:
                audio1 = re.listen(source)
                text2 = re.recognize_google(audio1)
            if text2 == "print variable":
                print("print("")")
                sys.stdout.flush()
            elif text2 =="print text" :
                print('print(" ")')
                sys.stdout.flush()
            elif text2 =="input":
                print('input("")')
                sys.stdout.flush()
            elif text2 =="if else statement":
                print('if  :   else:')
                sys.stdout.flush()
            elif text2=="next":
                print("\n")
                sys.stdout.flush()
            elif text2=="for loop":
                print("for x in  :")
            elif text2 == 'exit':
                break
            else:
                print(text2.lower())
                sys.stdout.flush()

            
# import speech_recognition as sr
# import sys

# r = sr.Recognizer()
# with sr.Microphone() as source:
#     print("Speak Anything :")
#     sys.stdout.flush()
#     audio = r.listen(source)
#     try:
#         x = ""
#         text = r.recognize_google(audio)
#         if (text.lower() == 'if'):
#             x = 'if(condition):\n'
#         elif(text.lower == 'enter'):
#             x = '\n'
#         else:
#             x = text
#         print("{}".format(x))
#         sys.stdout.flush()
#     except:
#         print("Sorry could not recognize what you said")
#         sys.stdout.flush()