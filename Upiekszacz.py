if __name__ == '__main__':
    json = ""
    plik = "logowane.json"
    with open(plik, "r") as f:

        for line in f.readlines():
            for znak in  line:
                if znak ==",":
                    json+=", \n"
                else:
                    json+=znak
    with open(plik, "w") as f:
        f.write(json)
