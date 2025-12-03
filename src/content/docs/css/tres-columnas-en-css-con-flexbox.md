---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6AIFNPK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDEf5xOBxlQMmP5FqZRL1aBC4ezw4alL3%2FHH7%2Bymne%2FkgIhAKAnWgJVrbEs7wxvZeM4Gz2mD11HMxQWtxU74hFZIAJlKv8DCDYQABoMNjM3NDIzMTgzODA1IgwdR2P2pMRyu92BPzsq3AOdlbWWg2HuQipMc%2BTvWAzAQAzIaGAQS6MqaxTVqz7o0vuDKruxiK0nauHl87z2W9MEXBif76anrQtv3wWJpGwprXt93WWeUrQTuar4ZXfDRLX9f0Fi1NBVckaNiLgF%2BbVgLHPJVkLzbqq%2Fa9JL%2FqkJs%2BWRiAwaKLtUtESy5r5aTM2GiGgPQ7RZZ2ttjCYE%2F6IjL2S4d6vk26rKs1gwSyip0vonQ%2BDQXEJvz6w7OHs5PUbHdjTlVJ9i%2FiviarXhWe7ZwQUyvZafG764AuVpzshKXuB0HstOXSKahkBlFb5ObGB0ECwgGMP2fr%2Fb0ACM2mCqgVQjGao4aphHasqW8OegxdgIGm7EIKwc1cYKbIc%2BNqN7fqBhsvEEMEBgO9zOuLpIf99bKyqGIjhoON%2FBf8DQqNzsTu9GucvxFt%2BOae4BcZTZzmwbsK227gLbh1bPojXl3hvMgf871EdPhlqHBCRnvQBg95Q2Ateii7RiAC1sse3LTKudz0yhBBFWgDLWFYX7dZZtHoVuOs0CmpF99vRtg0U1eRLUe3lbEs1608oUtmZU%2B%2BGf2htZi9q9IRGL90MVqozdXC7wIBVo5vUaoh1CnleUMGj0Pb8h9QrcXP%2BTAZTL4eI6BppdaCVDEzDpvcLJBjqkAel6dENQVW1ffWBoiQdPJm3EdJoG2KPaDe1dGctr2HbY7NpXKaul%2FePo6WjxTc77fojEXMjTS%2BNhQYgPntuG9VtziR8t2W7zMF0Gbqti%2Bv75EC9obclytGD8cXAxtnKo%2F00XjuBo4QiYG6N2FdWT2x1mZMzPrpOX7Oy2080s5d34F9GavuI8%2BhnWPCyWB2zRdJ4PIUglvYAh2S17C6JpeppIjhUQ&X-Amz-Signature=65dfbba5a0a7b11495717facbf9bc37938559e8db13df2ceb7ed8451b70ffd3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6AIFNPK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDEf5xOBxlQMmP5FqZRL1aBC4ezw4alL3%2FHH7%2Bymne%2FkgIhAKAnWgJVrbEs7wxvZeM4Gz2mD11HMxQWtxU74hFZIAJlKv8DCDYQABoMNjM3NDIzMTgzODA1IgwdR2P2pMRyu92BPzsq3AOdlbWWg2HuQipMc%2BTvWAzAQAzIaGAQS6MqaxTVqz7o0vuDKruxiK0nauHl87z2W9MEXBif76anrQtv3wWJpGwprXt93WWeUrQTuar4ZXfDRLX9f0Fi1NBVckaNiLgF%2BbVgLHPJVkLzbqq%2Fa9JL%2FqkJs%2BWRiAwaKLtUtESy5r5aTM2GiGgPQ7RZZ2ttjCYE%2F6IjL2S4d6vk26rKs1gwSyip0vonQ%2BDQXEJvz6w7OHs5PUbHdjTlVJ9i%2FiviarXhWe7ZwQUyvZafG764AuVpzshKXuB0HstOXSKahkBlFb5ObGB0ECwgGMP2fr%2Fb0ACM2mCqgVQjGao4aphHasqW8OegxdgIGm7EIKwc1cYKbIc%2BNqN7fqBhsvEEMEBgO9zOuLpIf99bKyqGIjhoON%2FBf8DQqNzsTu9GucvxFt%2BOae4BcZTZzmwbsK227gLbh1bPojXl3hvMgf871EdPhlqHBCRnvQBg95Q2Ateii7RiAC1sse3LTKudz0yhBBFWgDLWFYX7dZZtHoVuOs0CmpF99vRtg0U1eRLUe3lbEs1608oUtmZU%2B%2BGf2htZi9q9IRGL90MVqozdXC7wIBVo5vUaoh1CnleUMGj0Pb8h9QrcXP%2BTAZTL4eI6BppdaCVDEzDpvcLJBjqkAel6dENQVW1ffWBoiQdPJm3EdJoG2KPaDe1dGctr2HbY7NpXKaul%2FePo6WjxTc77fojEXMjTS%2BNhQYgPntuG9VtziR8t2W7zMF0Gbqti%2Bv75EC9obclytGD8cXAxtnKo%2F00XjuBo4QiYG6N2FdWT2x1mZMzPrpOX7Oy2080s5d34F9GavuI8%2BhnWPCyWB2zRdJ4PIUglvYAh2S17C6JpeppIjhUQ&X-Amz-Signature=0b49767d95b68f8d9be280c3359c04c6b6d1f3dc6a6105807d98cff69af341e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

