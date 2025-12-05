---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYHD4SO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWzYdIfInBbqqqDQha7Gg%2FJTTCR52IvcC8GWGtdGilYAIgFolocporMYIZC1B8mYfR9tjQ53QeKBITIaBAM0c1k54q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDH7AkWvmiYPzfgoubSrcA9AStR3yHl1r4g1a3Wm9kHDGMtly3jSBX0H1O8m2zzu5QTSvi9Tm3E4w28LYXKLbuAxkwdYu4c5w6Hztkoyq1LEYNXmcNJ99XcXKf%2FVPEwHBfx887ccdLrCx7esyFP76T5jK7M58FMitfhKitTRvr9fclmGDRyiL2ikvofmp%2BOvlJ%2FxIYyli9MSNsvSOFSC1eOlA6SIIXkwriYJzF2Igtu0IgS6uH6vp3bT0wRBwVMkYtuTlVMPPVQq%2BFy1cY17P1QrwtLObXrR5D47CDoSUDwpt1M7fyLoD7YTJwEBO%2BDP7iYrp5nN%2BTkB33x4NlGs4cr8eKnphqkBdNi8Fi4SPSAw3ssOoEwe6oJ%2FNrtIImIpprTb4ABYbI7clOT3zWTHHEzso8EqkXv72sqX3hXG%2B05mhzKKKPDtVkvuj7%2F%2BEXOdZ%2BcOgKCgWAWyuUB7Ibn%2BTknbTNurKNXtSOUTMK%2ByJNgLkjvseoUKcpRxPT7vdhd5eYood5XMkWXw27rgB3meCXWHHPAt8iQPJ1arjorGu%2F0MdeldDmZutIMnbxgKAjjnBw4ShNxgk72B7wCiurZlMnF5qSu%2B4%2BaOmj380053t9Ka4MqmgYebWuXxIFrI4JSgL5WObzwUHCHH8NhdLMP2vyckGOqUBwunJ1iqx9%2Fi%2BJRw11uSEt5UkSKf5be1CRcPY%2F8M6%2F%2BmahofILbXWqIqHPRuKXHT2q8r6R1O7XsQG4Ls%2FFRTln25o%2BMEf8DMXcrphGvdV%2Fi3dT2SPnBCX6QccTFziHljHh2gFC%2FtSGfdDBQD45Bh6B0M9FZA6qv81oacZApOVhJl4F2TgJ7NOQNPDxr4tEJA4BnDPr38ZA0fdQjpwXtXFISpun6Fe&X-Amz-Signature=ee113eea07156f4182749265ab5a0edb68c0570867a5c41a7119036900d0d13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSYHD4SO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWzYdIfInBbqqqDQha7Gg%2FJTTCR52IvcC8GWGtdGilYAIgFolocporMYIZC1B8mYfR9tjQ53QeKBITIaBAM0c1k54q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDH7AkWvmiYPzfgoubSrcA9AStR3yHl1r4g1a3Wm9kHDGMtly3jSBX0H1O8m2zzu5QTSvi9Tm3E4w28LYXKLbuAxkwdYu4c5w6Hztkoyq1LEYNXmcNJ99XcXKf%2FVPEwHBfx887ccdLrCx7esyFP76T5jK7M58FMitfhKitTRvr9fclmGDRyiL2ikvofmp%2BOvlJ%2FxIYyli9MSNsvSOFSC1eOlA6SIIXkwriYJzF2Igtu0IgS6uH6vp3bT0wRBwVMkYtuTlVMPPVQq%2BFy1cY17P1QrwtLObXrR5D47CDoSUDwpt1M7fyLoD7YTJwEBO%2BDP7iYrp5nN%2BTkB33x4NlGs4cr8eKnphqkBdNi8Fi4SPSAw3ssOoEwe6oJ%2FNrtIImIpprTb4ABYbI7clOT3zWTHHEzso8EqkXv72sqX3hXG%2B05mhzKKKPDtVkvuj7%2F%2BEXOdZ%2BcOgKCgWAWyuUB7Ibn%2BTknbTNurKNXtSOUTMK%2ByJNgLkjvseoUKcpRxPT7vdhd5eYood5XMkWXw27rgB3meCXWHHPAt8iQPJ1arjorGu%2F0MdeldDmZutIMnbxgKAjjnBw4ShNxgk72B7wCiurZlMnF5qSu%2B4%2BaOmj380053t9Ka4MqmgYebWuXxIFrI4JSgL5WObzwUHCHH8NhdLMP2vyckGOqUBwunJ1iqx9%2Fi%2BJRw11uSEt5UkSKf5be1CRcPY%2F8M6%2F%2BmahofILbXWqIqHPRuKXHT2q8r6R1O7XsQG4Ls%2FFRTln25o%2BMEf8DMXcrphGvdV%2Fi3dT2SPnBCX6QccTFziHljHh2gFC%2FtSGfdDBQD45Bh6B0M9FZA6qv81oacZApOVhJl4F2TgJ7NOQNPDxr4tEJA4BnDPr38ZA0fdQjpwXtXFISpun6Fe&X-Amz-Signature=5bff8f962361511c020739ce29c33e9193758c4dbb7128d59d868c42cd4c0c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

