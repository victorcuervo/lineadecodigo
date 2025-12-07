---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ONGKPE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHezIw4ZthrXsMuk%2BcnAIbMKKOS%2B8WHW6FTPNv7R3GNDAiEAtoREiLam7KSiR%2Fcc30yPA4r1JqWXCnTfS2ovRSWsYOAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnr7H00IFEGI7NM4ircAyf34Nu4oSwAlBN31zK1zh4sPydTSNTyPPi8hnFk8Z1mDGDUk36psRbGtmRBTbZNqVkz4fiU12cySjGZdyr27buNs6nbpW0IIsExKZkBRtrKIil7NeZLprfQHNaY8L%2BnjrSpHFhTouLoa32fSPjV4LvUEcI%2BSC0HliVqshLinQs%2F16mAUdOuz6UoFrJT7uLlci3fOZ2fdrrVxFUVKjCUW8D%2BSzaPIu6y62Svbr0RCLPyS64i0SXwHD3vrFaaa64B5CkKdDUHzUQw8aOWMcKrGI6osR5pBZIs8b8RmyIiPQAXHYB4KWQAbsH3myh7aPyhvu2q24HKGL1z06VIGwNIQ8k9YCHAoAffoZP%2BDdzh00JU%2BUapFAG8OIDBt6arRbuOKltSZ%2F9ljqu8UZeX0wMd1%2BSnLkp5BpSMWN6rHvQXTVlEi9yuhA1XCD%2FVhd6a1FS%2F0h83Ipb9RuX3P2s0tRKOJdASYYcDmGG48ZVAiKowcHI9J%2BAbQKJrj0wQf9fYfBtcGvtRs6dPVf67Rl%2BhXRfJqDIaBSIa9N%2BMvOqTAAHGReAbIOwMSxT0V2U3bJjVSZY1TPXZAkuCh2P1hW14ORRrHNDDCrVkTj1dIS2pcQai%2BnAR3%2FH5lTI8riQG7FPIMKuf1MkGOqUBsZwjIEoUl5ZyzxXdjFDuWG%2Bdbo1i%2FhTZVcnyfjwvNNOPwahm9VPdGQ8%2Bjwf4YncqX5s%2FIXi2%2B8ZajhiOlsXWzq%2Bp3O%2BRWxV8wGUcvPLZc3CGITYjkhORLuvSTAcAcUOwKuhQGt89m4EpkHBN0dy9tCuL0U1ZQDtQpMxm%2FJS7F7KsaONPlRnoecDQ7L3T9kkBvkRVbqspLCPEJKy%2FeLzYECmwD4zc&X-Amz-Signature=361bed760e244933ba0da1627887a041838bbe0507081e82d452bcbac98e94b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ONGKPE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHezIw4ZthrXsMuk%2BcnAIbMKKOS%2B8WHW6FTPNv7R3GNDAiEAtoREiLam7KSiR%2Fcc30yPA4r1JqWXCnTfS2ovRSWsYOAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnr7H00IFEGI7NM4ircAyf34Nu4oSwAlBN31zK1zh4sPydTSNTyPPi8hnFk8Z1mDGDUk36psRbGtmRBTbZNqVkz4fiU12cySjGZdyr27buNs6nbpW0IIsExKZkBRtrKIil7NeZLprfQHNaY8L%2BnjrSpHFhTouLoa32fSPjV4LvUEcI%2BSC0HliVqshLinQs%2F16mAUdOuz6UoFrJT7uLlci3fOZ2fdrrVxFUVKjCUW8D%2BSzaPIu6y62Svbr0RCLPyS64i0SXwHD3vrFaaa64B5CkKdDUHzUQw8aOWMcKrGI6osR5pBZIs8b8RmyIiPQAXHYB4KWQAbsH3myh7aPyhvu2q24HKGL1z06VIGwNIQ8k9YCHAoAffoZP%2BDdzh00JU%2BUapFAG8OIDBt6arRbuOKltSZ%2F9ljqu8UZeX0wMd1%2BSnLkp5BpSMWN6rHvQXTVlEi9yuhA1XCD%2FVhd6a1FS%2F0h83Ipb9RuX3P2s0tRKOJdASYYcDmGG48ZVAiKowcHI9J%2BAbQKJrj0wQf9fYfBtcGvtRs6dPVf67Rl%2BhXRfJqDIaBSIa9N%2BMvOqTAAHGReAbIOwMSxT0V2U3bJjVSZY1TPXZAkuCh2P1hW14ORRrHNDDCrVkTj1dIS2pcQai%2BnAR3%2FH5lTI8riQG7FPIMKuf1MkGOqUBsZwjIEoUl5ZyzxXdjFDuWG%2Bdbo1i%2FhTZVcnyfjwvNNOPwahm9VPdGQ8%2Bjwf4YncqX5s%2FIXi2%2B8ZajhiOlsXWzq%2Bp3O%2BRWxV8wGUcvPLZc3CGITYjkhORLuvSTAcAcUOwKuhQGt89m4EpkHBN0dy9tCuL0U1ZQDtQpMxm%2FJS7F7KsaONPlRnoecDQ7L3T9kkBvkRVbqspLCPEJKy%2FeLzYECmwD4zc&X-Amz-Signature=70c4b112a67a49e3e10d91dbfd463783b24efb47d25599e80f0624f785ded7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

