### @flyoutOnly true


# QureoMinecraft

## エージェントをつかって、ブロックをおいてもらおう！

こんかいは``||loops.くりかえし||``ブロックをつかうよ！なんかいくりかえせばよさそうかな？「くりかえし」のなかのすうじをかえてみよう！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
for (let index = 0; index < 4; index++) {
    
}
hiragana_agent.place(FORWARD)
hiragana_agent.move(FORWARD, 1)
```

```template
for (let index = 0; index < 1; index++) {
    hiragana_agent.move(UP, 1)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.place(DOWN)
}
```