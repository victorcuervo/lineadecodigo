---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJFA2IR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Ilz8hZcwExNFX0jjWZo4w%2FpDFxq3VIaFJTjWUjOxzAiEA9UHKY%2BVpUoPGtPMPjk5zV7%2BWgd1Axta0b7zaGNrLY04qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABFl%2Fz01CU4PCl88CrcA5kUg5aKk%2FDlqHGQAWHfYbHMsC7zPaCP%2FHwlslCKFisTjJaRS9mOMKr4r00DthAnGK%2BjX%2FABUET4GvIIv%2BzjYJl0lPRqWhrsk7ZUPG%2FNnVhlev1ES6c0VvDNa8%2BpkCsriuyMktFfXo1wY%2Bm1NMlHRwIfYGEloNPHcdrey8m7dSAIbYTaCGjRTzpD2Sp93EmWWOugPYOZ1a9jVNNoxnq8H3v4wBTCxsw6WnFDijrkbuOl%2BcCT0t5fpa5PWI576cfuTMUE7Egl05Gs8Z0O3Psl%2BJis%2FxUPaoGR0bGn3jmUw%2FdY00bPj09EAfkWIvcI3BqXuggVP%2BXNa7Icc%2FJ9VbrvFYcyMikaQ4Lnj3rzkv8lGge0vbBOCZiH04AWJuFGkfSKSnd1Mne9jijYSMT6THnfEIxZ6ED76%2Fu9onVajPLqW2JMIeutw0vDOtfQxQqc%2BmQl1yHUvT9pGbGnxwDYKaZIfI8L3s4kUvaVShRNt8vxHiE3ZVmv7k2JZC8xZ7HYXADAA%2Bu1kwOcWK%2FzuR7dRvn9PbPuC9xvkTDKCg%2BnGR5tyCUdu62NcNdVaFlcxPAOyYW74WPKSo%2FA8%2B9DDTND%2FAflpwyHAsoRSxfAUWp9t1uf%2Fd3fyxPEv8S8KsgDSNS4MK7%2B0skGOqUBgD%2BUuSJL0LsQLfkYoNSNsptknNJnB55%2FK6SgPYagFuvWj3qx670omugqjii5ZNwaZLjBkRpeScFJE4HtyfF2eCR5%2B6RbQ4CiT%2F%2FOx50tpP0t46TE2vlMQ53sNy1%2FwckIVSgBiLXNTcpOGb%2B%2B8kZq2e5Tub8QJ2qPB32kLkGZ9rlOs8vIdEtNNAV0eNXWIBw55sUqFRw2owu4D57VbR4aU5aC7iOF&X-Amz-Signature=557366e02c334cb08365ef9ce0d5cf07cdef70218f1aec28862049ea1bd9a3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJFA2IR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8Ilz8hZcwExNFX0jjWZo4w%2FpDFxq3VIaFJTjWUjOxzAiEA9UHKY%2BVpUoPGtPMPjk5zV7%2BWgd1Axta0b7zaGNrLY04qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABFl%2Fz01CU4PCl88CrcA5kUg5aKk%2FDlqHGQAWHfYbHMsC7zPaCP%2FHwlslCKFisTjJaRS9mOMKr4r00DthAnGK%2BjX%2FABUET4GvIIv%2BzjYJl0lPRqWhrsk7ZUPG%2FNnVhlev1ES6c0VvDNa8%2BpkCsriuyMktFfXo1wY%2Bm1NMlHRwIfYGEloNPHcdrey8m7dSAIbYTaCGjRTzpD2Sp93EmWWOugPYOZ1a9jVNNoxnq8H3v4wBTCxsw6WnFDijrkbuOl%2BcCT0t5fpa5PWI576cfuTMUE7Egl05Gs8Z0O3Psl%2BJis%2FxUPaoGR0bGn3jmUw%2FdY00bPj09EAfkWIvcI3BqXuggVP%2BXNa7Icc%2FJ9VbrvFYcyMikaQ4Lnj3rzkv8lGge0vbBOCZiH04AWJuFGkfSKSnd1Mne9jijYSMT6THnfEIxZ6ED76%2Fu9onVajPLqW2JMIeutw0vDOtfQxQqc%2BmQl1yHUvT9pGbGnxwDYKaZIfI8L3s4kUvaVShRNt8vxHiE3ZVmv7k2JZC8xZ7HYXADAA%2Bu1kwOcWK%2FzuR7dRvn9PbPuC9xvkTDKCg%2BnGR5tyCUdu62NcNdVaFlcxPAOyYW74WPKSo%2FA8%2B9DDTND%2FAflpwyHAsoRSxfAUWp9t1uf%2Fd3fyxPEv8S8KsgDSNS4MK7%2B0skGOqUBgD%2BUuSJL0LsQLfkYoNSNsptknNJnB55%2FK6SgPYagFuvWj3qx670omugqjii5ZNwaZLjBkRpeScFJE4HtyfF2eCR5%2B6RbQ4CiT%2F%2FOx50tpP0t46TE2vlMQ53sNy1%2FwckIVSgBiLXNTcpOGb%2B%2B8kZq2e5Tub8QJ2qPB32kLkGZ9rlOs8vIdEtNNAV0eNXWIBw55sUqFRw2owu4D57VbR4aU5aC7iOF&X-Amz-Signature=d76382be196eab70c8599fb92cdffd47b6874c602948794030e1defa4539098b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

