---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF5GM4RP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPemtU7pyXy5aK6KOsvr9V1p%2FR4aKKzMJbsf9ypR4%2BHQIhALK8qgyRgSff2i6AKHFu13%2Frih2tCXt9DxsT5OmEujGuKv8DCHoQABoMNjM3NDIzMTgzODA1IgytN9trqUQF9MpiegQq3ANmHZLN1GwQzNviye%2FaKgavdA9gne2I%2F9YuzqZNHnWUD73NLA91zjRsbOR5bTOER95UvpoUoZAYUXSSM0waNBxhShtKtWe54Iwl89Jh2PdGaRZZwib4mc5EtRmbBuDXdKuqTsGG6nQLV8V%2FCV5tNqtM4wQ8z5BQLDcQ2JENPhcChGwqUQjWxhyiVj2TV%2Fd8OYRvbV6PT9%2BVk1A8v0qwW0BTH49RJRhD2Ie6JKxN8eC1hPRUEL4HdQoiWTADDtrkA3PS%2BHvE0czXh1kTpDznYojudhELVVl0Esf2iJ6pECqmMQR3jQoEunR7Wht0kthTY9i5AaE%2FqKA30d90uRvqoey28OU8QN5nUriFLc0G57H0CUshGDVFQCoilZxId%2FXmfJ%2FI3MEqB6JSF3JWufFsfof0mk4bv6ENdrPtT9102fV%2BgSE5uhS%2BrT0EpwkpWHsHb6hIgYgyCkkF2EL5ZeerW2Ua5xlSPEInfsDn2p3ZyqceMDN4ckUryFYtuQLixCKvVH0ATl4IoUwEwxaaOi5h%2B2E4um1A2FiANukvii47ZiBHMSfWIbqny5pY0g%2B2QUWWZXIIxAB8itNyp4%2B%2F7lx63nKYthS3digZLdcV%2FlUod9sK%2FKqVDod7Qs8qqRrz%2BDCRwtHJBjqkAcDe2NPPqQoZmB3a7DxLCS323YdkyWII9kHoUO7l5rRQ3%2F0pLHzm1WbI%2BOamhdU%2FDvtm9nrIMtFvF8Z8rCaOK8Uvhs17sfn7DzxLgCQ2lHL4PjIutHVPaZVcAYOset9hP7XqOmWOynNoE3JZ3zR%2BZpf2FL81C38ivJMNTIn2ieAlH6xDJ6U5Rqa18zEMQA7WtvscCGeIASFH%2F7HSvqXOur2wK6D%2B&X-Amz-Signature=6bb3c54a0ab44df1ee97f39d6202b06e34a462f2f889a1aafd8521bcb05dada8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF5GM4RP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPemtU7pyXy5aK6KOsvr9V1p%2FR4aKKzMJbsf9ypR4%2BHQIhALK8qgyRgSff2i6AKHFu13%2Frih2tCXt9DxsT5OmEujGuKv8DCHoQABoMNjM3NDIzMTgzODA1IgytN9trqUQF9MpiegQq3ANmHZLN1GwQzNviye%2FaKgavdA9gne2I%2F9YuzqZNHnWUD73NLA91zjRsbOR5bTOER95UvpoUoZAYUXSSM0waNBxhShtKtWe54Iwl89Jh2PdGaRZZwib4mc5EtRmbBuDXdKuqTsGG6nQLV8V%2FCV5tNqtM4wQ8z5BQLDcQ2JENPhcChGwqUQjWxhyiVj2TV%2Fd8OYRvbV6PT9%2BVk1A8v0qwW0BTH49RJRhD2Ie6JKxN8eC1hPRUEL4HdQoiWTADDtrkA3PS%2BHvE0czXh1kTpDznYojudhELVVl0Esf2iJ6pECqmMQR3jQoEunR7Wht0kthTY9i5AaE%2FqKA30d90uRvqoey28OU8QN5nUriFLc0G57H0CUshGDVFQCoilZxId%2FXmfJ%2FI3MEqB6JSF3JWufFsfof0mk4bv6ENdrPtT9102fV%2BgSE5uhS%2BrT0EpwkpWHsHb6hIgYgyCkkF2EL5ZeerW2Ua5xlSPEInfsDn2p3ZyqceMDN4ckUryFYtuQLixCKvVH0ATl4IoUwEwxaaOi5h%2B2E4um1A2FiANukvii47ZiBHMSfWIbqny5pY0g%2B2QUWWZXIIxAB8itNyp4%2B%2F7lx63nKYthS3digZLdcV%2FlUod9sK%2FKqVDod7Qs8qqRrz%2BDCRwtHJBjqkAcDe2NPPqQoZmB3a7DxLCS323YdkyWII9kHoUO7l5rRQ3%2F0pLHzm1WbI%2BOamhdU%2FDvtm9nrIMtFvF8Z8rCaOK8Uvhs17sfn7DzxLgCQ2lHL4PjIutHVPaZVcAYOset9hP7XqOmWOynNoE3JZ3zR%2BZpf2FL81C38ivJMNTIn2ieAlH6xDJ6U5Rqa18zEMQA7WtvscCGeIASFH%2F7HSvqXOur2wK6D%2B&X-Amz-Signature=7315d15746f70d8131472ea2e7bba94cd0e032d3c6e29220e42aeea74776b3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

