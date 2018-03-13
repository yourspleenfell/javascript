function slots(scrilla) {
    w = 0;
    c = 0;
    for (x = scrilla; x >= 1;)
    {
        c = Math.floor(Math.random() * 100);
        w = Math.floor(Math.random() * 50)+50;
        x = x - 1;
        if (c == 1)
        {
          break;
        }
    }
    if (c > 1)
    {
        return "Sorry, you have not won.";
    }
    else if (c <= 1);
    {
        if (x == 0 && w > 0)
        {
            return "Congratulations! You have won" + "\xa0" + w + "\xa0" + "coins. Remaining credits:" + "\xa0" + x;
        }
        else if (x !== 0)
        {
            temp = w + x;
            return "Congratulations! You have won" + "\xa0" + w + "\xa0" + "coins. Remaining credits:" + "\xa0" + x + "\xa0" + "Total:" + "\xa0" + temp;
        }
        else (x == 0 && w == 0)
        {
          return "Sorry, you have 0 credits"
        }
    
    }
}
slots(50);