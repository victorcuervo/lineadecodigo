---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DM4W66%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6UFJ4ToslLq%2B%2BER7CgKQCNykrSDrkjGMIUwebDK9owQIhAJM0rgxcnJgqAnDi2lyguTHknQPND%2BULv2ewN%2FX0IyA%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2chxp4I0TghpkTCwq3AM30MuY%2FUb8n4%2FnLUQjMJeH10QH8tpdhZ24leau58HYrPIyreSLIdwq%2FmGkTVctoBqVgsVTwIkCDza6%2B6o8fNxt7c3YyI65ykdNO8a5J%2BAeiS1ILhRjh3UZv0QapCFiFTBiG6YoQXNTqZA7S6UfDI2fe%2BnitMio7AwepWU0vw6RaKyBqxLRuM%2BAUYouHq%2BKk1pHi2qt2sYgXkp27c2TFC1390A5aWhbjkyBsg34Rhr2hln3qh8%2FZWQNtOTySG3DD3vp61siixYYLavn1zihofXdEEfxQmg17krVOgcea2DcRvTP%2BtD6EKHOjsMdfEWasxuSmx5ZF99Q8oYMaCd7l%2BddseSZVzbgf2OmTkZ5ekWjlHBNy88aZpxsCZ9fLPBha2t2ZxBuWrwLL6UQ5xgOl72TGZMcLOuv9r%2F6jo6%2FEo08o2nAZB1GdifuVOOsegPTvWk%2B9kYfMWoonQugatd7iKBYFw%2FYAm81K7mDjamUuy7ZH0sw1t4jC75Q5yKpd59%2BscoFDMETPOLe24m1rCClq8AzkWiBN8vEU0NPtYlDD2QDd5nb%2BX7yaYkjyoT0DIYlZ%2FT1dWBu1B9p8zo%2B0BW784LClAAz7RSMTpRQu55PeEtjfTDl%2BhmoMoRxdUW25TD%2F3NzJBjqkAZGdIm0kjTycna8LBHnmO3e7%2BxTuMqiDg557emyV2%2B%2B3UgzeFyDn8U2d9jcbE%2FraU9c5NrDQLemh%2FbrXov4Cv%2B4BgXfAG7Y9NoftLUIwGOIJnBynFn7ur9wAz2MXZwk6p5WYK%2FxgqMws3EIONsErmfttSLzPzfE5eEiOklh7KyMOo9cl0h7qh1J%2FHmREbAZs4ls4y7GtYBGZsdOktprhv7gtNI%2FF&X-Amz-Signature=10f0d2b8a86328b77991485371471306b088720c125720a53faba3e414618889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DM4W66%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6UFJ4ToslLq%2B%2BER7CgKQCNykrSDrkjGMIUwebDK9owQIhAJM0rgxcnJgqAnDi2lyguTHknQPND%2BULv2ewN%2FX0IyA%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2chxp4I0TghpkTCwq3AM30MuY%2FUb8n4%2FnLUQjMJeH10QH8tpdhZ24leau58HYrPIyreSLIdwq%2FmGkTVctoBqVgsVTwIkCDza6%2B6o8fNxt7c3YyI65ykdNO8a5J%2BAeiS1ILhRjh3UZv0QapCFiFTBiG6YoQXNTqZA7S6UfDI2fe%2BnitMio7AwepWU0vw6RaKyBqxLRuM%2BAUYouHq%2BKk1pHi2qt2sYgXkp27c2TFC1390A5aWhbjkyBsg34Rhr2hln3qh8%2FZWQNtOTySG3DD3vp61siixYYLavn1zihofXdEEfxQmg17krVOgcea2DcRvTP%2BtD6EKHOjsMdfEWasxuSmx5ZF99Q8oYMaCd7l%2BddseSZVzbgf2OmTkZ5ekWjlHBNy88aZpxsCZ9fLPBha2t2ZxBuWrwLL6UQ5xgOl72TGZMcLOuv9r%2F6jo6%2FEo08o2nAZB1GdifuVOOsegPTvWk%2B9kYfMWoonQugatd7iKBYFw%2FYAm81K7mDjamUuy7ZH0sw1t4jC75Q5yKpd59%2BscoFDMETPOLe24m1rCClq8AzkWiBN8vEU0NPtYlDD2QDd5nb%2BX7yaYkjyoT0DIYlZ%2FT1dWBu1B9p8zo%2B0BW784LClAAz7RSMTpRQu55PeEtjfTDl%2BhmoMoRxdUW25TD%2F3NzJBjqkAZGdIm0kjTycna8LBHnmO3e7%2BxTuMqiDg557emyV2%2B%2B3UgzeFyDn8U2d9jcbE%2FraU9c5NrDQLemh%2FbrXov4Cv%2B4BgXfAG7Y9NoftLUIwGOIJnBynFn7ur9wAz2MXZwk6p5WYK%2FxgqMws3EIONsErmfttSLzPzfE5eEiOklh7KyMOo9cl0h7qh1J%2FHmREbAZs4ls4y7GtYBGZsdOktprhv7gtNI%2FF&X-Amz-Signature=55cafa6d7315e11c8130cee229be695f1d4525181452ec5515f40287a5810dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

