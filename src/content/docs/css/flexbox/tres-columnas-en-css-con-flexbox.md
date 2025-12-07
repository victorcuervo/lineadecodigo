---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZKTEAQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTQox4m%2FrS0hlLEIdE6BHYrn3HCjg7JCcPqRhsiNGvzQIhAKwLd7%2B2WhTvzCV3Qgu%2BBwz1PfBOU3kUWaZZ0lz3zUZ9KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyux%2Bg2OnQk8MSFRdQq3AOwSbElB%2BmcJagyGIF1r1ru74%2FhOTH9XhF%2B62qJtDcNOpNSakOxwDPWK1%2BkSSxkALSdRueDoln9SfDypQKbSvCFHB3%2Bil0kX4RE6lpLcm00w9FIl7PkPN3kWlm5GL81x3biRdBgI5yjVgLy3AMQH0ornjoHDq2i3NDjDDHW6rcPCc9XEY75mP5834hc8YDqCQRPXjXRwSZ8jsKZsVJuSbdPJSIopY36LQEjk0ath0TfciWcpqW2Yf5KblVh9Azspe4QFlgxQvxjKPWbZCBRfJkNzsyw%2Fbm67Q4TG1H9jW%2FxmDAmQNt%2FXidc2lkRLO8%2FP2akmT8TGR5cMuJrpxjY%2BzZC4z%2BWKi4B0UDv2Ime%2B5ykYGxdxDIUWmaUFuwCKhI1m10qStKwcauHWvVDpS9zJ1%2FtiL3jycnoaNqvnUq%2BSHfRK92xRxkY2AR7mnNc5XxCToJ%2BTmEPeAbCm%2FWInBvBGl7lXxHRn8C0F8NsEEtcdYmDLL%2BXXd2ysXvq8SnH2DTvUTPZoIlw7MN0kzNR8PtUMPmYph8oTFdkHmmQvoY3VwPuc74SKRrdf%2F8ZLccBCn%2FJEwoPQ00YJn6wJjCbFQCGQrlrCVUWeGYozTo4unpRtBA3KCOgvSZcxP56dF1fbjDq%2FdLJBjqkAY0Cs124HpfcALip3B0tK5CtMtphnRqAdmeDVZ6SnD7XEhir%2FqT68Y3GxzkY8GupmsrIxS%2F74G1KMTr4YMYcmofS3hg7r37Ueq6io00oWcizatUHL2tYIATJgKgPmRK9Wy1843%2FxvxiHNn73buOcZKwyXgfjbKPKSGtwQodXsuphzD1IEVfe8uUFiPV64ZD2%2Fl3fT6YbEB3%2FNbqFUXGNNrHPiPFw&X-Amz-Signature=18e5e1703418af120361977112312f5593fbf860cd07486f9878aa984e82f828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZKTEAQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTQox4m%2FrS0hlLEIdE6BHYrn3HCjg7JCcPqRhsiNGvzQIhAKwLd7%2B2WhTvzCV3Qgu%2BBwz1PfBOU3kUWaZZ0lz3zUZ9KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyux%2Bg2OnQk8MSFRdQq3AOwSbElB%2BmcJagyGIF1r1ru74%2FhOTH9XhF%2B62qJtDcNOpNSakOxwDPWK1%2BkSSxkALSdRueDoln9SfDypQKbSvCFHB3%2Bil0kX4RE6lpLcm00w9FIl7PkPN3kWlm5GL81x3biRdBgI5yjVgLy3AMQH0ornjoHDq2i3NDjDDHW6rcPCc9XEY75mP5834hc8YDqCQRPXjXRwSZ8jsKZsVJuSbdPJSIopY36LQEjk0ath0TfciWcpqW2Yf5KblVh9Azspe4QFlgxQvxjKPWbZCBRfJkNzsyw%2Fbm67Q4TG1H9jW%2FxmDAmQNt%2FXidc2lkRLO8%2FP2akmT8TGR5cMuJrpxjY%2BzZC4z%2BWKi4B0UDv2Ime%2B5ykYGxdxDIUWmaUFuwCKhI1m10qStKwcauHWvVDpS9zJ1%2FtiL3jycnoaNqvnUq%2BSHfRK92xRxkY2AR7mnNc5XxCToJ%2BTmEPeAbCm%2FWInBvBGl7lXxHRn8C0F8NsEEtcdYmDLL%2BXXd2ysXvq8SnH2DTvUTPZoIlw7MN0kzNR8PtUMPmYph8oTFdkHmmQvoY3VwPuc74SKRrdf%2F8ZLccBCn%2FJEwoPQ00YJn6wJjCbFQCGQrlrCVUWeGYozTo4unpRtBA3KCOgvSZcxP56dF1fbjDq%2FdLJBjqkAY0Cs124HpfcALip3B0tK5CtMtphnRqAdmeDVZ6SnD7XEhir%2FqT68Y3GxzkY8GupmsrIxS%2F74G1KMTr4YMYcmofS3hg7r37Ueq6io00oWcizatUHL2tYIATJgKgPmRK9Wy1843%2FxvxiHNn73buOcZKwyXgfjbKPKSGtwQodXsuphzD1IEVfe8uUFiPV64ZD2%2Fl3fT6YbEB3%2FNbqFUXGNNrHPiPFw&X-Amz-Signature=3ef4936d5e066a60e35a5ceb9ee9a5d5cda713dee40cab1c357f96f78cc93674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

