### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに〇へおかせる||``

``||agent.エージェントを〇に〇ブロックいどうさせる||``

``||agent.エージェントをじぶんのいちにもどす||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("go", function () {
    while (true) {
        for (let index = 0; index < 4; index++) {

        }

    }
})
player.onChat("run", function () {

})
```

```ghost
player.onChat("go", function () {
    while (true) {
        for (let index = 0; index < 4; index++) {
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
        }
        hiragana_agent.move(DOWN, 4)
    }
})
player.onChat("run", function () {
    hiragana_agent.teleportToPlayer()
})

```