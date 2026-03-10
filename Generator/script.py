import  json , random
from datetime import datetime

class Uzytkownik():
    def __init__(self):
        self.id=0
        self.name=""
        self.last_name=""
        self.miejce_zamieszkania=""
    def to_dict(self):
        return {
            "id":self.id,
            "name":self.name,
            "last_name":self.last_name,
            "miejsce_zamieszkania":self.miejce_zamieszkania
        }
class Logowanie():
    def __init__(self):
        self.id=0
        self.data = ""
        self.lokalizacja=""
    def to_dict(self):
        return {
            "id":self.id,
            "data":self.data,
            "lokalizacja":self.lokalizacja
        }
Tablica_uzytkownikow = []
Tablica_logowan = []

if __name__ == "__main__":
    Imiona_nazwiska = [
    ["Jan","Sobieski","Warszawa"],
    ["Big","Yahu","Ganda"],
    ["Dante","Aligerii","Valona"],
    ["John","Doe","Waszyngton"]]
    for i in range(4):

        nowy_uzytkownik = Uzytkownik()
        nowy_uzytkownik.id = i
        nowy_uzytkownik.name = Imiona_nazwiska[i][0]
        nowy_uzytkownik.last_name = Imiona_nazwiska[i][1]
        nowy_uzytkownik.miejce_zamieszkania = Imiona_nazwiska[i][2]
        Tablica_uzytkownikow.append(nowy_uzytkownik)
    for i in range(4):
        uzytkownik = Tablica_uzytkownikow[i]
        for j in range(10):
            godzina = 8

            for t in range(4):
                logowanie = Logowanie()

                godzina +=  random.randint(1,3)
                minuty = random.randint(0,59)
                d = datetime(2026,3,10+j,godzina,minuty)
                logowanie.data = d.isoformat()
                lokalizacja = random.randint(1,10)
                if lokalizacja == 5:
                    logowanie.lokalizacja = "Teheran"
                else:
                    logowanie.lokalizacja = uzytkownik.miejce_zamieszkania
                logowanie.id = uzytkownik.id
                Tablica_logowan.append(logowanie)


    y = json.dumps([u.to_dict() for u in Tablica_uzytkownikow])
    b = json.dumps([u.to_dict() for u in Tablica_logowan])

    with open("../Data/uzytkownicy.json", "w") as f:
        f.write(y)
    with open("../Data/logowane.json", "w") as f:
        f.write(b)
    print(b)
