---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K2V3MRG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICXFpAHM2XAwiUll4RCChY%2FK3IaAcYV4uRdXs8eEs50BAiBauJEYJDxdEbLGIpAHphuL3Hs%2BWo%2B9PxkZbiN88mmozir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM%2BkiV81PqkXqbyUVYKtwDE6w3bV6exQRyMdbQ7EdVHzg8Lz%2FQS%2FFC9oprWDGQfunSfN0PTDALjjs2jHIHMx4UHVY25XKrri3WTp6jTxKo4P1m0nQO3Dm8gWGQkK3ABukSo9a%2FCBR7P6bRWIK4tHqgmgMPMlmovC1wC5D8S3O7NS7OFXxmWNGmOZsltRG8zY0vf0hlv3ce9YVEP7DplScknH4yzaFJhlm8P1RY%2FvN8xQRoxgO%2Bb0Qv%2F1FUN0%2FIcgUfoy03zq3SCvCRqrIkaBhQPY4zS8JbX7WIRJcFDy2qPvxXVOa5lzZC5CofIxUEThmgUw%2F6fJxUOTM6QMiY0zkrFAEg4JuaRgudVV7t6AW5Yy2IoOM%2FSxgeljMjVmiJn5WlwmPRFod%2FWLvQeoitz9njL36dbgnT%2F%2BElRduj6a8SuIqrhAxDbXBuhTOmAwPfUm563SI0CvapWAABp9iqM6gCTVjlAD0ZN9Ort7boEXgQybZF2AuKw6LoodvnVRgEs7qzY389giyxehCcGyUVCGPAhm07cklmoI1ICqVSju90gvJz%2FhMKNSUQ2sMvaMEIOEvUCV3UximVbqtKRCGKaV%2BSbDMrVoCBUuJN%2FfPO8WvQ%2BR4Bo%2Bvz3WNo%2FZaiGuX7LAT5X2JvqogacDV0Hr4w%2BMrEyQY6pgGZzROSiE%2BBm5oI0w8b3XAE%2FXHUNWshpuGi5hUshCFXMi6JP7BzOVu1nBYU68HNwRMHxFivsDQaOS2WLjxpdRlnDCXYe%2Fl9X0aIpV3bF2l3Gz4EJyw1H%2FP7PhgaQW19gmOxKorcZlcTZCPLumzFMpQ%2B7PiQYfI%2B2raKePsAhtTE9CWcaVEzuPj%2B5MNdPVwdCtwJA4h17eo%2FkjeuU1k7rg8RiUt1filY&X-Amz-Signature=a1b9489db00a8e68a5fe09af79d7dbf54312e330f7ee3ba056c59d2e4437463d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K2V3MRG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICXFpAHM2XAwiUll4RCChY%2FK3IaAcYV4uRdXs8eEs50BAiBauJEYJDxdEbLGIpAHphuL3Hs%2BWo%2B9PxkZbiN88mmozir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM%2BkiV81PqkXqbyUVYKtwDE6w3bV6exQRyMdbQ7EdVHzg8Lz%2FQS%2FFC9oprWDGQfunSfN0PTDALjjs2jHIHMx4UHVY25XKrri3WTp6jTxKo4P1m0nQO3Dm8gWGQkK3ABukSo9a%2FCBR7P6bRWIK4tHqgmgMPMlmovC1wC5D8S3O7NS7OFXxmWNGmOZsltRG8zY0vf0hlv3ce9YVEP7DplScknH4yzaFJhlm8P1RY%2FvN8xQRoxgO%2Bb0Qv%2F1FUN0%2FIcgUfoy03zq3SCvCRqrIkaBhQPY4zS8JbX7WIRJcFDy2qPvxXVOa5lzZC5CofIxUEThmgUw%2F6fJxUOTM6QMiY0zkrFAEg4JuaRgudVV7t6AW5Yy2IoOM%2FSxgeljMjVmiJn5WlwmPRFod%2FWLvQeoitz9njL36dbgnT%2F%2BElRduj6a8SuIqrhAxDbXBuhTOmAwPfUm563SI0CvapWAABp9iqM6gCTVjlAD0ZN9Ort7boEXgQybZF2AuKw6LoodvnVRgEs7qzY389giyxehCcGyUVCGPAhm07cklmoI1ICqVSju90gvJz%2FhMKNSUQ2sMvaMEIOEvUCV3UximVbqtKRCGKaV%2BSbDMrVoCBUuJN%2FfPO8WvQ%2BR4Bo%2Bvz3WNo%2FZaiGuX7LAT5X2JvqogacDV0Hr4w%2BMrEyQY6pgGZzROSiE%2BBm5oI0w8b3XAE%2FXHUNWshpuGi5hUshCFXMi6JP7BzOVu1nBYU68HNwRMHxFivsDQaOS2WLjxpdRlnDCXYe%2Fl9X0aIpV3bF2l3Gz4EJyw1H%2FP7PhgaQW19gmOxKorcZlcTZCPLumzFMpQ%2B7PiQYfI%2B2raKePsAhtTE9CWcaVEzuPj%2B5MNdPVwdCtwJA4h17eo%2FkjeuU1k7rg8RiUt1filY&X-Amz-Signature=82fdb8e05e64e8f1b22c43146569d34c9a7ec1b916ed81ccdcf51b10fc4fac2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

