---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYXBULD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7t7AMdXxltQdOPQaLLQcwgKj1tU%2FB8ug3CMHjY1IziAIgbh1X22Q4OMjlsCCp80Zm1wcai1c1L0URlLQ63VcUnOsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbz4IMbMNRW0MW%2FYircA8x7sHBUV%2BosS7KKJvWGep4BOmUjYWh%2BiHVP4vBowckHlcuil7We5ZaNRQ6eKmGvQSMSbr%2By7YTu6DkMMLTiwfUPZsK07tMWdnRu%2BBJvR8scDrDBOKvHr6lcG4%2BtJMZhr25FFHY2FUuGtxb1PoKcgnawYxNSrlnlDXnB9evk%2B%2Bwkme6pALH5NmmlAl%2BS7y9hw1wb6R0bRTraIa9Z%2FpE6P1XaAioEd0BJGDEulxwm6CYTeC422yXegTcb2Bc3fXwwc9A2dVpJy5nBpPpls6LLCSuHFvQBP8rHfgunb1m9CPWWbe0UOMkAftRzVKvYrcu0uQin2BcnvBtsFFReNH4T2o2ssf%2F9s%2Bqdb4lcD%2FWBczlMoDRedw6xOTH0kW8H4P6C0qjPk%2B5H%2FYNG1ikYt%2BTIOfl68bHKOPchqopLWcYzcbYb1LmoETWVNh2H%2BjxxGRy2Az0gbRc%2FfJdvT%2FWqSbyXtR5PgwWkrI2zIN6H6pkyxqyNxilVojE7QLr8NlJdwsrQtVwmKwKNGP5DNkpFe2tOjDkhLWflSd2SYz51TPz%2FJaN4HxKb%2FCLNL34X7cBONe%2B6XcqJINRhCDtSnCfX%2BZX0Bd5%2F3S8K3B5lUdxgVJFz%2BDaD9m5rMpGYm%2Bk9xIehMMvk28kGOqUBFjeplMeyL7s3OEdhcWo%2B2V88Aecf6tJBqoyl3E1v9TmGNyEJuSeB6yc2w1WJpfRphW99AHN%2FsqV03SArW63Pw47zulLVwuBgjau4pgbdPNvFXwzYbdocAZqgmpS30yvOHYbUyTP5CdWkakDxy4Ah5WKIZyEYE%2F1o%2BM9qfhuyDnspXJkGEfOD8a2jY7ZVwsd0Lz9Ivuhv2i6BTqxBLtv0EZCqBRto&X-Amz-Signature=8ae5b0fe0dc6764e2ce79170cbfca1625eb887db203bc4ad7f73a4312d4c583d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYXBULD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7t7AMdXxltQdOPQaLLQcwgKj1tU%2FB8ug3CMHjY1IziAIgbh1X22Q4OMjlsCCp80Zm1wcai1c1L0URlLQ63VcUnOsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbz4IMbMNRW0MW%2FYircA8x7sHBUV%2BosS7KKJvWGep4BOmUjYWh%2BiHVP4vBowckHlcuil7We5ZaNRQ6eKmGvQSMSbr%2By7YTu6DkMMLTiwfUPZsK07tMWdnRu%2BBJvR8scDrDBOKvHr6lcG4%2BtJMZhr25FFHY2FUuGtxb1PoKcgnawYxNSrlnlDXnB9evk%2B%2Bwkme6pALH5NmmlAl%2BS7y9hw1wb6R0bRTraIa9Z%2FpE6P1XaAioEd0BJGDEulxwm6CYTeC422yXegTcb2Bc3fXwwc9A2dVpJy5nBpPpls6LLCSuHFvQBP8rHfgunb1m9CPWWbe0UOMkAftRzVKvYrcu0uQin2BcnvBtsFFReNH4T2o2ssf%2F9s%2Bqdb4lcD%2FWBczlMoDRedw6xOTH0kW8H4P6C0qjPk%2B5H%2FYNG1ikYt%2BTIOfl68bHKOPchqopLWcYzcbYb1LmoETWVNh2H%2BjxxGRy2Az0gbRc%2FfJdvT%2FWqSbyXtR5PgwWkrI2zIN6H6pkyxqyNxilVojE7QLr8NlJdwsrQtVwmKwKNGP5DNkpFe2tOjDkhLWflSd2SYz51TPz%2FJaN4HxKb%2FCLNL34X7cBONe%2B6XcqJINRhCDtSnCfX%2BZX0Bd5%2F3S8K3B5lUdxgVJFz%2BDaD9m5rMpGYm%2Bk9xIehMMvk28kGOqUBFjeplMeyL7s3OEdhcWo%2B2V88Aecf6tJBqoyl3E1v9TmGNyEJuSeB6yc2w1WJpfRphW99AHN%2FsqV03SArW63Pw47zulLVwuBgjau4pgbdPNvFXwzYbdocAZqgmpS30yvOHYbUyTP5CdWkakDxy4Ah5WKIZyEYE%2F1o%2BM9qfhuyDnspXJkGEfOD8a2jY7ZVwsd0Lz9Ivuhv2i6BTqxBLtv0EZCqBRto&X-Amz-Signature=10af8910a536f4cc07addedf6c10ab2eb3ac8855c640e8cd012196629a8e331c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

