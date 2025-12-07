---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW3FDJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqGcR3pypcR14z2Gou7IdN0Y2Y4woYhGgkspbKUHQR%2FAiA17UAQP06fSw6oP%2FRqurJJtTzC6r9GCQtI0Hi3HHoeOyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFbnN2%2F30qCDKHUZNKtwDgi8sCVuwaqOC8NdUYveQzd%2BxnohEytv2Ji%2FLJVe6c1ScxdCt8h4%2FoVc8C58qXlrwGTPQb3tVNn2FTH39qS1bDAveiLCorXgNLlWkN9mxtcfHFs9g1hqVPFjX8h%2Fw1JgRD3guC0e5aZYHqC%2FNDsI7ugwYsUKAflERxd9IJJRVEY7GBzJoaaaW20MLlt33CuJ5UkSzy%2BeC56P4%2BswT4rK5159cxCgXfj8pZK1r0QNzNcgxuH6lHfztC5hmXBom9UFs%2Bp1XQ6hiDG5YuRWX4S05R4TGtz%2BXzMCj8XC3WQ6UvRz%2B6S1qKcJHg0m%2F0qDtujdK2RGqRjPN9aPga1GqqNbcSMbBTCibpj50Ai4yAE8qO0toDM8xekkx%2F8zrY698nEr1pkVMp%2FVRHVAIwZaiFWkTR1c1jYWBLyHx7XuiVqjE8SDC9VWhG6WfLZVipmoK%2F3nRe35qWenKxrlU%2BCaqSXAyNqM9tYFOWJfP4y4%2FT7ZW%2BVk7p1G2HTHY%2BX6cWyraVONo8ggfAcmekeFax2TRWcEniZdQjhNVAAksPZS11Jx4PYFbWgmesPuGQ2%2BI6iiaICeCScMSozRVgaadz%2FfwpZ2PL0x5FfRabnZiwQniuqdWKvVGLvxRjYwu%2BxGw0nEwlrjWyQY6pgHkm%2BYuWUNUs6NBSvZvgzJ5ZfCFiOQpii11Tb0tDNRQ0hQUlVSTlFW%2F6Td9zdPWZwgoXSJ4x0PXE0PmHn%2FW2nC76JXsyGIib%2Fk%2FRFJmCfLs%2Bys3kEiLWFgLB6kDqjgw44qVZcwhM22AjSin8ihNKSUwX3A5%2FVA4YsoSw5Sg4ow5uIP4P3v0fTYRYqI%2FysW9FSN1KCSoXjEW1age3aepIezYBl5Dj7UI&X-Amz-Signature=a7c3f65ba80dc93e42dc17a81ec54b858d97f809dc9ffacb63c37b11e1944369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW3FDJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqGcR3pypcR14z2Gou7IdN0Y2Y4woYhGgkspbKUHQR%2FAiA17UAQP06fSw6oP%2FRqurJJtTzC6r9GCQtI0Hi3HHoeOyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFbnN2%2F30qCDKHUZNKtwDgi8sCVuwaqOC8NdUYveQzd%2BxnohEytv2Ji%2FLJVe6c1ScxdCt8h4%2FoVc8C58qXlrwGTPQb3tVNn2FTH39qS1bDAveiLCorXgNLlWkN9mxtcfHFs9g1hqVPFjX8h%2Fw1JgRD3guC0e5aZYHqC%2FNDsI7ugwYsUKAflERxd9IJJRVEY7GBzJoaaaW20MLlt33CuJ5UkSzy%2BeC56P4%2BswT4rK5159cxCgXfj8pZK1r0QNzNcgxuH6lHfztC5hmXBom9UFs%2Bp1XQ6hiDG5YuRWX4S05R4TGtz%2BXzMCj8XC3WQ6UvRz%2B6S1qKcJHg0m%2F0qDtujdK2RGqRjPN9aPga1GqqNbcSMbBTCibpj50Ai4yAE8qO0toDM8xekkx%2F8zrY698nEr1pkVMp%2FVRHVAIwZaiFWkTR1c1jYWBLyHx7XuiVqjE8SDC9VWhG6WfLZVipmoK%2F3nRe35qWenKxrlU%2BCaqSXAyNqM9tYFOWJfP4y4%2FT7ZW%2BVk7p1G2HTHY%2BX6cWyraVONo8ggfAcmekeFax2TRWcEniZdQjhNVAAksPZS11Jx4PYFbWgmesPuGQ2%2BI6iiaICeCScMSozRVgaadz%2FfwpZ2PL0x5FfRabnZiwQniuqdWKvVGLvxRjYwu%2BxGw0nEwlrjWyQY6pgHkm%2BYuWUNUs6NBSvZvgzJ5ZfCFiOQpii11Tb0tDNRQ0hQUlVSTlFW%2F6Td9zdPWZwgoXSJ4x0PXE0PmHn%2FW2nC76JXsyGIib%2Fk%2FRFJmCfLs%2Bys3kEiLWFgLB6kDqjgw44qVZcwhM22AjSin8ihNKSUwX3A5%2FVA4YsoSw5Sg4ow5uIP4P3v0fTYRYqI%2FysW9FSN1KCSoXjEW1age3aepIezYBl5Dj7UI&X-Amz-Signature=bc30920ba3b04dac9d0e3f50912bce14308dcc864b260eacc058936dfa793828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

