---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NVR7VZK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPgRq6QRsB4kM2SzJCwWpnJsD6e8Hb0T9U8BmhResaRAiBXva4qUsi5UWW%2BjMWq8CgzqZagym0jCa73v0jNwdah8Cr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTEOAOo4dCYNCS6sCKtwDHJBJy%2F0vkoSPm2psrlkiS%2BGdXNVZHwLBQSLl8ojxr67kQifKW6AUS4q%2FyChRfB2ufRaNM24uQPF9KZcXM4u2Sq1NU6slkvdEgCtgTqyN4C1Yq2vHVJ9yLXTH9JOdRHsW4J%2Fo6SZfGFA3UsL4v53BXEWNeBmLpxeJp3IbbUBNTevIKx%2BjwClLIu%2FnCz9ho29%2FsJp6bj6%2BHGXcSIoHElViJLIndMeoCySCMfT6W91%2BgnbQUDTSapmraQIbyG8P40wJmqNtLhugOVNggEfAjRACyjCQekppYbSMAAi3MrAMPpiCekq1SgNQ87vkxUaFUp2hQOjUY1MD%2BfASeS4XGPrauf5n4npC7SAtZJCs3GoTz5YBZxgj36oLxbH%2BFZBae6P9nf9fXFsIxoxs6oHfTClVQyCkGuT1fJwiSsbpKZzb2B0TZYV%2BQD0av9LshClN68KzHp2ZK%2BdqxQpe%2BfzJ7IeKpUkOIGMMyUMwbhdmIY%2B9qD3XbxG2UUIikfc61QUr2rT1wu4xnbUCiuQze%2BtCq6FL3rjHuFTyvY7zw2PczioO4lPdX6tChNGXaVpyzfy7OFT7NQz%2FwE7wVS%2Fe8s%2B5CJ3D530kdYTpr8pSvhZN7vj7Dbhsyh1Lcj%2Bvkg8jJzow7sXRyQY6pgHna5leZb%2Fc3XIcISxY2ETnE4zM%2FCeSHINgPlADxQNaMldVIs7UQl1CCW7pkrRRbEvKpdEh9GIvMX6aH%2FJlXzaRE8H4F%2B6QdxDH2D2ppe68Rp5to8efh8IE83dC%2BVdC7ts4nM9Ot9qf%2B%2FEgTexS26UNGymvsxItG0%2B3G8%2BegPvJUcjgXoDQSbvE%2BHUitNSvpTSSvuanWjUYi1YB5xJ5JyQb2EKFMcoA&X-Amz-Signature=bfc4982abbfb4eca84cece1772c849e898640981a358b6e4ad0f7e1780f67ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NVR7VZK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPgRq6QRsB4kM2SzJCwWpnJsD6e8Hb0T9U8BmhResaRAiBXva4qUsi5UWW%2BjMWq8CgzqZagym0jCa73v0jNwdah8Cr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTEOAOo4dCYNCS6sCKtwDHJBJy%2F0vkoSPm2psrlkiS%2BGdXNVZHwLBQSLl8ojxr67kQifKW6AUS4q%2FyChRfB2ufRaNM24uQPF9KZcXM4u2Sq1NU6slkvdEgCtgTqyN4C1Yq2vHVJ9yLXTH9JOdRHsW4J%2Fo6SZfGFA3UsL4v53BXEWNeBmLpxeJp3IbbUBNTevIKx%2BjwClLIu%2FnCz9ho29%2FsJp6bj6%2BHGXcSIoHElViJLIndMeoCySCMfT6W91%2BgnbQUDTSapmraQIbyG8P40wJmqNtLhugOVNggEfAjRACyjCQekppYbSMAAi3MrAMPpiCekq1SgNQ87vkxUaFUp2hQOjUY1MD%2BfASeS4XGPrauf5n4npC7SAtZJCs3GoTz5YBZxgj36oLxbH%2BFZBae6P9nf9fXFsIxoxs6oHfTClVQyCkGuT1fJwiSsbpKZzb2B0TZYV%2BQD0av9LshClN68KzHp2ZK%2BdqxQpe%2BfzJ7IeKpUkOIGMMyUMwbhdmIY%2B9qD3XbxG2UUIikfc61QUr2rT1wu4xnbUCiuQze%2BtCq6FL3rjHuFTyvY7zw2PczioO4lPdX6tChNGXaVpyzfy7OFT7NQz%2FwE7wVS%2Fe8s%2B5CJ3D530kdYTpr8pSvhZN7vj7Dbhsyh1Lcj%2Bvkg8jJzow7sXRyQY6pgHna5leZb%2Fc3XIcISxY2ETnE4zM%2FCeSHINgPlADxQNaMldVIs7UQl1CCW7pkrRRbEvKpdEh9GIvMX6aH%2FJlXzaRE8H4F%2B6QdxDH2D2ppe68Rp5to8efh8IE83dC%2BVdC7ts4nM9Ot9qf%2B%2FEgTexS26UNGymvsxItG0%2B3G8%2BegPvJUcjgXoDQSbvE%2BHUitNSvpTSSvuanWjUYi1YB5xJ5JyQb2EKFMcoA&X-Amz-Signature=3db0a45bf25d9ce5de40ac9958b50542c38eb055d9bf2a29fe9ce8c59a287fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

