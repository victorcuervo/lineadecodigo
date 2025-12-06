---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSXJMZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcL5%2FZmyTTSQqb49SQR0Dc7Lu6PbNU%2BJE0Ir2vlqRlugIgO3ngu6zy%2F0CntA%2FYLtC2Xy8P26lWTdxrzZp45hFydxkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO2aOkZA65pLIo%2BroyrcA57TKcp5LCeyFh6AFdwCyTF%2BNm%2FF9Sm86wfvOIzXQVssf3UL1oI0QsL6lc0DkHh1HAAC8KBIUhnCeJtDNcIbUzH%2FSnLHGDwDQ1pFQS0qmX1OamhYm5xysMpXhHyoQ2SdVh01rWllZa7MsxvfXPyRrjHSGquoeUOFzO6bsxfmsknoSW%2BgjkA%2FSE6gz0eExNZvtHL9zM1U5ixksGoDtxTtRwCzhRscpgYK%2FGY9e%2BCMG9yVem6foPCp3YHMpD4CmxRAjgDpnzLaziO1d3C4d2%2Fbc0GOvRggsDisBmxP0TheNHyqWCaOdIt%2FEWEwmcu0IfOS68JmMYP%2FZr%2FN7NjiS0BOZ3qXJpGw7IqFrOGclXHd1kjC%2BGH3Htt8Wuy8N6PCd0TQgZrdYQax1q%2FMuhQXKTD8Ug0AVc%2BUNNTNQYP5fZ%2Fh22kfKgXyNrBI9bqlMZ6XUn5VfZalg%2BWWOO9zJ2U92LzcLsqJ%2F%2FhtCpJ62SFmcKvO3X71nKsWpQFa6w8p4eu3Af5nxu78Afe2QQ9zGkoGOyMsIHBwQtUdLm0u7%2BP5LZ4Wt%2Fd%2FdomlPjccFvBR52ekWDwqLhwmvaDRo%2FiNPHF3rHFiWnNgroOLnyitrPegCANJ5wrqhpX73cHHCrp%2BJ8oLMM7rz8kGOqUBKu3A1GOuFB3mBK6XVWdJyFsXKwZT9hk4ezuqnXrWuC8UzLf8DPvI7iAwMp60FYvc1wBT629iMOKqueBRiU3YIA%2Be%2Bv2s9iJBPysaxX1B%2Bvsa63GwgatDCh00uryascgJ2rZmn6A3FFrtkfVCkg6%2BDv1N83S39DrhlBubFcrZ2wiRxN9VU4XGN1u7sZ0QDmwzVv2MHt47FaUESoVCO9uwzzhsIkFw&X-Amz-Signature=92ab7bfa5690b7177adef18e0fba7945bdc72e31873e411f11355a4b247bc92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSXJMZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcL5%2FZmyTTSQqb49SQR0Dc7Lu6PbNU%2BJE0Ir2vlqRlugIgO3ngu6zy%2F0CntA%2FYLtC2Xy8P26lWTdxrzZp45hFydxkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO2aOkZA65pLIo%2BroyrcA57TKcp5LCeyFh6AFdwCyTF%2BNm%2FF9Sm86wfvOIzXQVssf3UL1oI0QsL6lc0DkHh1HAAC8KBIUhnCeJtDNcIbUzH%2FSnLHGDwDQ1pFQS0qmX1OamhYm5xysMpXhHyoQ2SdVh01rWllZa7MsxvfXPyRrjHSGquoeUOFzO6bsxfmsknoSW%2BgjkA%2FSE6gz0eExNZvtHL9zM1U5ixksGoDtxTtRwCzhRscpgYK%2FGY9e%2BCMG9yVem6foPCp3YHMpD4CmxRAjgDpnzLaziO1d3C4d2%2Fbc0GOvRggsDisBmxP0TheNHyqWCaOdIt%2FEWEwmcu0IfOS68JmMYP%2FZr%2FN7NjiS0BOZ3qXJpGw7IqFrOGclXHd1kjC%2BGH3Htt8Wuy8N6PCd0TQgZrdYQax1q%2FMuhQXKTD8Ug0AVc%2BUNNTNQYP5fZ%2Fh22kfKgXyNrBI9bqlMZ6XUn5VfZalg%2BWWOO9zJ2U92LzcLsqJ%2F%2FhtCpJ62SFmcKvO3X71nKsWpQFa6w8p4eu3Af5nxu78Afe2QQ9zGkoGOyMsIHBwQtUdLm0u7%2BP5LZ4Wt%2Fd%2FdomlPjccFvBR52ekWDwqLhwmvaDRo%2FiNPHF3rHFiWnNgroOLnyitrPegCANJ5wrqhpX73cHHCrp%2BJ8oLMM7rz8kGOqUBKu3A1GOuFB3mBK6XVWdJyFsXKwZT9hk4ezuqnXrWuC8UzLf8DPvI7iAwMp60FYvc1wBT629iMOKqueBRiU3YIA%2Be%2Bv2s9iJBPysaxX1B%2Bvsa63GwgatDCh00uryascgJ2rZmn6A3FFrtkfVCkg6%2BDv1N83S39DrhlBubFcrZ2wiRxN9VU4XGN1u7sZ0QDmwzVv2MHt47FaUESoVCO9uwzzhsIkFw&X-Amz-Signature=edae008ed11468938b8932bcf1739db9a5e26bbc66ef1e302db7d4f436360b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

