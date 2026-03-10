### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
        hiragana_agent.place(FORWARD)
    }
})
```