# -*- coding: utf-8 -*-

f = open('../Data/tweek.parse', 'r')
outFile = open('usageData.js', 'w')

keyVals = ['"values"']


outStr = 'var usageData = {\n'
index = 0
firstTime = True
for line in f:
    if len(line) < 1:
        break
    
    newItem = ''
    index = index % 24
    split = line.split()
    if index == 0: 
        outStr = outStr + '"' + split[index] + '": [\n'
        outStr = outStr + '{"Jobs": ' + split[2] + '},\n'
    elif index == 23:
        outStr = outStr + '{"Jobs": ' + split[2] + '}\n],\n'
    else:
        outStr = outStr + '{"Jobs": ' + split[2] + '},\n'
    
    index += 1
    
    
outStr = outStr[:-2] + '\n};\n\n'
    
outStr = outStr + 'function returnUsage() {\n\tvar usage = JSON.stringify(usageData);\n\tusage = JSON.parse(usage);\n\treturn usage;\n}'
    
outFile.write(outStr)
f.close()
outFile.close()