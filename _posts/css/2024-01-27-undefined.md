---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWVDNRJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD6sijpRgTpGaB7b6%2FEqXxoUwttu1%2FiqYyHQLKqAR%2FqtQIhALcqGUPv1X7fdmkXSRWUUyTCQJ06ClfpEX5hrrA1js6TKv8DCCsQABoMNjM3NDIzMTgzODA1Igwcp3X7rEZtBwJ6MPsq3ANBRUStANucwznIa75s6vO%2FiTMto5OwTB4V4V%2BbVcWKXuf%2B%2FrTJyaQ3CNYF8gY0Gml9V0XYtkMEtLrXs9bncJhhFtXnKJMp4P%2BW%2FHjchNw9yMFbg1hrTjmRrTuRR0Hh3aBI5NFdryLR5VHLML7mulCRINrSfNxuE%2FctN%2FPHh%2FWb0BURZYG2HjMqY0P9OaZPuoQMjHlYQ1L9cZYI4jen1NLjc4opW%2BQgUidD2EKMwUrvMRRd16lUyQvGhXbrKFiTAIFX3XuAOmVB0TmIu5I019icpe36VXvFUEmqk3V0tPjK1cj4zqcLFcpC%2FDePOH2Cjw9ZWB0M27Hp%2BX%2BkxhMILiUI01UbEDiXhuwJSt%2FYCabamXDFDR%2FgenZb5zW2JVuK13RYK88%2F0Gt8L5fYI3okHoahauct0Znox5jrmgpHn9H4jP9FvXSA9lb%2BMQbpKz4il1zjR74NtCAoONIRFoHXme%2Bp%2Fc7eeYT6zq3cESNXjV%2BO%2F1zTElfSQ%2Ft%2F1tMqmxx2SU5GSOjAs2Bzn59UJeGWG0tiJLr2kSNKi39V0qIzsU4WHp2pnedUfBNJT8KVOVblmIr7FvnoHiBB%2Bw%2Fwo8X4ynT0Cgkv1CoFX1BJjNGhjO1Fl9YSVLUvTxi7EI9%2FODDZksDJBjqkAVgki3%2BJPIB%2BMPIYfchfhP8d84rLhEY6bQoJsJnIqtMfhJhlAwqvnybeN7mNkiWnOW8Tx8QNiNHv6Du4P9O%2FnpOwJRbHCd5vl%2BQVaG2yXP%2F74IymWE23xHz70vs%2FQgUtsBojRb06CKCRqEgRDVfhdo4g7Q412QswgtiWuRAMOf0VPMKxu0G7QexLTkVBuGhvtcHeOLdANn42nvkmBIcPUNHbvH52&X-Amz-Signature=8e9fbd13de80bd17a810e08680977a81ff1938e33ac336cbad3c2db64369e820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWVDNRJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD6sijpRgTpGaB7b6%2FEqXxoUwttu1%2FiqYyHQLKqAR%2FqtQIhALcqGUPv1X7fdmkXSRWUUyTCQJ06ClfpEX5hrrA1js6TKv8DCCsQABoMNjM3NDIzMTgzODA1Igwcp3X7rEZtBwJ6MPsq3ANBRUStANucwznIa75s6vO%2FiTMto5OwTB4V4V%2BbVcWKXuf%2B%2FrTJyaQ3CNYF8gY0Gml9V0XYtkMEtLrXs9bncJhhFtXnKJMp4P%2BW%2FHjchNw9yMFbg1hrTjmRrTuRR0Hh3aBI5NFdryLR5VHLML7mulCRINrSfNxuE%2FctN%2FPHh%2FWb0BURZYG2HjMqY0P9OaZPuoQMjHlYQ1L9cZYI4jen1NLjc4opW%2BQgUidD2EKMwUrvMRRd16lUyQvGhXbrKFiTAIFX3XuAOmVB0TmIu5I019icpe36VXvFUEmqk3V0tPjK1cj4zqcLFcpC%2FDePOH2Cjw9ZWB0M27Hp%2BX%2BkxhMILiUI01UbEDiXhuwJSt%2FYCabamXDFDR%2FgenZb5zW2JVuK13RYK88%2F0Gt8L5fYI3okHoahauct0Znox5jrmgpHn9H4jP9FvXSA9lb%2BMQbpKz4il1zjR74NtCAoONIRFoHXme%2Bp%2Fc7eeYT6zq3cESNXjV%2BO%2F1zTElfSQ%2Ft%2F1tMqmxx2SU5GSOjAs2Bzn59UJeGWG0tiJLr2kSNKi39V0qIzsU4WHp2pnedUfBNJT8KVOVblmIr7FvnoHiBB%2Bw%2Fwo8X4ynT0Cgkv1CoFX1BJjNGhjO1Fl9YSVLUvTxi7EI9%2FODDZksDJBjqkAVgki3%2BJPIB%2BMPIYfchfhP8d84rLhEY6bQoJsJnIqtMfhJhlAwqvnybeN7mNkiWnOW8Tx8QNiNHv6Du4P9O%2FnpOwJRbHCd5vl%2BQVaG2yXP%2F74IymWE23xHz70vs%2FQgUtsBojRb06CKCRqEgRDVfhdo4g7Q412QswgtiWuRAMOf0VPMKxu0G7QexLTkVBuGhvtcHeOLdANn42nvkmBIcPUNHbvH52&X-Amz-Signature=22f058133f3ecda531250184c00eb26816196b94ec2bfb76ac1a695a80d18fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

