---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATZIGAU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGxYk3e5wkELOw93Zu1Ky5Erm2E5PHCV8kRBSRzF2s0jAiB%2FUfERG6ZiJ9kvE4dpL6LT7ccz2vo3kRwiBpTdiKnyPCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM1Gz%2FTN4ZE0bpruwuKtwDhsiQew9%2Fo5Qpt%2BMmn0VkJVEuz%2FdJ111XprAq0MMeJlHCzHcLjZW1fFmccfYnEDEbVrJHa11bY95I%2B9QHudQetSFut%2FfXeS2NTFZ2P17hgE%2B6U4ce%2BO%2F2DtPAmbxu%2Flmg%2FaK3XgtqnI8mTtC8htPE%2FIM6nhZuXGG%2BIAPRwfKkr6Hibz%2FoJfy%2BdgKP2BVhevftEprrjzfoLkc3mc9OKnE9L89oYJVnkSL0teBMQ1I8AWqTzFvsMdGn3%2FlWBOAVEDxm%2F2kUYJWFJtMTeniEJYICe7VIxmCMLPG1U8niKrWtGhZZw86%2FZD5Mds7Os1j%2BQtqGkQx84GDx947AT%2BYid5%2FEqge8dgbrTBTe3Fu7rsYAiCyWU4O%2F%2B5dlSU3E4gCAYB26Wm2AtG82cSq0hu5PEy3QCmjXTYRiRKVOtoVIC5WXmjMheiaGIc%2BzOFc1JLCdZ6PKZt1VcdiCVMo6hmrDCrtVhJPKgNmF03ldhoYKj26znZF9%2Bole535F3l%2FN9ljuYiGIoilCV5ebMt94Yp8yXDQgmx%2BfcC%2Fl%2Fm55b%2BbGYeUPBqx37lTrFxLMBI6Z5RgphT5f5v%2FfVcm0h6n%2BiwR60u%2BnERb0bxYbhCiz38Os%2Bo2%2Fk7DJzvIq1FWKUaKT8aYwl%2BfFyQY6pgFTyWC9MOwjn3IMFKBjFKZ%2BAzl3gXEgAYSkrjuQuw%2BGsrzWqONRIk4BW5UuIpnmgXAxyO8q6ps6llcCO7qLJxqJFHtJWG6gmxQfRQYFTeUMBR%2FT83Cp0rbvB%2BkqmqbdnjcgAiHWaQT7MBxryia%2BFFKqKT6Yk5p0MGHGllj2PwpWU%2Bzq%2BPwQIWJXOXhUA5nbDD0Cil9BPbwej3chHnVzdByQTw4RPRse&X-Amz-Signature=7a5a7623685e9216022670670c7101f390ef501ccc69bb1fdc667b665db6e61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QATZIGAU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGxYk3e5wkELOw93Zu1Ky5Erm2E5PHCV8kRBSRzF2s0jAiB%2FUfERG6ZiJ9kvE4dpL6LT7ccz2vo3kRwiBpTdiKnyPCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM1Gz%2FTN4ZE0bpruwuKtwDhsiQew9%2Fo5Qpt%2BMmn0VkJVEuz%2FdJ111XprAq0MMeJlHCzHcLjZW1fFmccfYnEDEbVrJHa11bY95I%2B9QHudQetSFut%2FfXeS2NTFZ2P17hgE%2B6U4ce%2BO%2F2DtPAmbxu%2Flmg%2FaK3XgtqnI8mTtC8htPE%2FIM6nhZuXGG%2BIAPRwfKkr6Hibz%2FoJfy%2BdgKP2BVhevftEprrjzfoLkc3mc9OKnE9L89oYJVnkSL0teBMQ1I8AWqTzFvsMdGn3%2FlWBOAVEDxm%2F2kUYJWFJtMTeniEJYICe7VIxmCMLPG1U8niKrWtGhZZw86%2FZD5Mds7Os1j%2BQtqGkQx84GDx947AT%2BYid5%2FEqge8dgbrTBTe3Fu7rsYAiCyWU4O%2F%2B5dlSU3E4gCAYB26Wm2AtG82cSq0hu5PEy3QCmjXTYRiRKVOtoVIC5WXmjMheiaGIc%2BzOFc1JLCdZ6PKZt1VcdiCVMo6hmrDCrtVhJPKgNmF03ldhoYKj26znZF9%2Bole535F3l%2FN9ljuYiGIoilCV5ebMt94Yp8yXDQgmx%2BfcC%2Fl%2Fm55b%2BbGYeUPBqx37lTrFxLMBI6Z5RgphT5f5v%2FfVcm0h6n%2BiwR60u%2BnERb0bxYbhCiz38Os%2Bo2%2Fk7DJzvIq1FWKUaKT8aYwl%2BfFyQY6pgFTyWC9MOwjn3IMFKBjFKZ%2BAzl3gXEgAYSkrjuQuw%2BGsrzWqONRIk4BW5UuIpnmgXAxyO8q6ps6llcCO7qLJxqJFHtJWG6gmxQfRQYFTeUMBR%2FT83Cp0rbvB%2BkqmqbdnjcgAiHWaQT7MBxryia%2BFFKqKT6Yk5p0MGHGllj2PwpWU%2Bzq%2BPwQIWJXOXhUA5nbDD0Cil9BPbwej3chHnVzdByQTw4RPRse&X-Amz-Signature=3d63ee15306f1531d2fad8f432aee2db5f378984fc320794245067435c530699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

