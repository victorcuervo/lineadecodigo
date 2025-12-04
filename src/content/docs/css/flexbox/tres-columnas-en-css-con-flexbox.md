---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR634HXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC8qc6PfC9rYE4E5U3hNc4Bs1ljUlO21uhDE98szEgoEwIhAP1VVhhaLVNE1m0DXJcVgdBKrZtL4kccptwIQ2yL%2FhTLKv8DCDoQABoMNjM3NDIzMTgzODA1IgxgiSaHqtoHaKYer%2Bsq3AO4LRJ8fR0ZhzdbrHA6EbGlUMjKWrv2GT212A9M0j1nERgOKMBp5PSndNChf4vjUfwXvF5nWqHNCaZpHh5sx3cnA45hxgrgsECjStNlC5GzKsI%2F9REZh5j%2FwZK2CI7438yqiB%2F0WOjdVoARx19xoFPWNIc02SawfCcM3fLEwYMT18QJqXND253NPzIRc554ThBnQ8J6AVN8J3yL1%2BCuewrh8P7PcVbmnMn%2FnbF70shFpScGWAXLOHHwoQTTcthcMdzGFE2dqGrLi%2FzBnab%2Fnkb0YOLAoagOLdse5E%2F4cyHMCPC95YhSmO4FtqZyVbNiGcrYsvn79LWsTcBjqTe0LPWYLG2z85RFA53LMAGwLoWc%2BdC6XZdjO9mUfweGfMLeGGosd6ec5R5HBEDqI%2BM94Q10NYCnOQr34%2FNzQunybi5Pshzv%2FazWBgtribxv4EhjLXAbFfL3NwFOw1mZIvgPdE%2FzrMZSNnFhgTvj%2FvyfrrFoWBiqKSxWbVWgDe8MyuXhO6MznBT0Sc6ojhZSElEke7MyxqamMHpGRxUNuWrXxIZhbXJ2hXqMuQ4h8rjSnFmpTjI77khGk9EQiyF%2BMCquXj3W8nmAmJBleqgvn4uVFGFF%2BgR0zQUVanTQ0nXTITDutMPJBjqkAezVbqs4eV9eLMQzUlqNSWEPDViZuks8dPlaUR3iDYfNo%2BawwmLZ4Uxt95BPO8l9MDUJ5pHL4rA3Dil0uTviEsWvcqVmSgj6snl8kRe5zaE9NHxqb7U7w%2BrElYfpWEDobBN%2B5r6jOhmnKtv9lE6XnUZ7B382rbtcpjWQjMw5iPn%2BF7p21ZzZyu85ScUNmQfHWlvr%2BEJh75t6YtXp8oSiHC1xMo%2BI&X-Amz-Signature=df3d1442867e9e5f20632ecbf1a3debb58632204a4f2af837eb4cc7dfd76a90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR634HXQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC8qc6PfC9rYE4E5U3hNc4Bs1ljUlO21uhDE98szEgoEwIhAP1VVhhaLVNE1m0DXJcVgdBKrZtL4kccptwIQ2yL%2FhTLKv8DCDoQABoMNjM3NDIzMTgzODA1IgxgiSaHqtoHaKYer%2Bsq3AO4LRJ8fR0ZhzdbrHA6EbGlUMjKWrv2GT212A9M0j1nERgOKMBp5PSndNChf4vjUfwXvF5nWqHNCaZpHh5sx3cnA45hxgrgsECjStNlC5GzKsI%2F9REZh5j%2FwZK2CI7438yqiB%2F0WOjdVoARx19xoFPWNIc02SawfCcM3fLEwYMT18QJqXND253NPzIRc554ThBnQ8J6AVN8J3yL1%2BCuewrh8P7PcVbmnMn%2FnbF70shFpScGWAXLOHHwoQTTcthcMdzGFE2dqGrLi%2FzBnab%2Fnkb0YOLAoagOLdse5E%2F4cyHMCPC95YhSmO4FtqZyVbNiGcrYsvn79LWsTcBjqTe0LPWYLG2z85RFA53LMAGwLoWc%2BdC6XZdjO9mUfweGfMLeGGosd6ec5R5HBEDqI%2BM94Q10NYCnOQr34%2FNzQunybi5Pshzv%2FazWBgtribxv4EhjLXAbFfL3NwFOw1mZIvgPdE%2FzrMZSNnFhgTvj%2FvyfrrFoWBiqKSxWbVWgDe8MyuXhO6MznBT0Sc6ojhZSElEke7MyxqamMHpGRxUNuWrXxIZhbXJ2hXqMuQ4h8rjSnFmpTjI77khGk9EQiyF%2BMCquXj3W8nmAmJBleqgvn4uVFGFF%2BgR0zQUVanTQ0nXTITDutMPJBjqkAezVbqs4eV9eLMQzUlqNSWEPDViZuks8dPlaUR3iDYfNo%2BawwmLZ4Uxt95BPO8l9MDUJ5pHL4rA3Dil0uTviEsWvcqVmSgj6snl8kRe5zaE9NHxqb7U7w%2BrElYfpWEDobBN%2B5r6jOhmnKtv9lE6XnUZ7B382rbtcpjWQjMw5iPn%2BF7p21ZzZyu85ScUNmQfHWlvr%2BEJh75t6YtXp8oSiHC1xMo%2BI&X-Amz-Signature=69fa1e4d3045cf6559d6f41f1c18b206962365f92fcddb31028fee64b1030757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

