---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKAWFAVS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5udx%2Fbp1c%2FyocC7yXBVzyIsC2RZhAHCB5K6Mlz%2FTxLQIhAKTk%2FYl0%2BCP2%2Fff1Qhqr5Bjv8PvcGmGgpFRS4vj9NoYnKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8WXUNv3u4H2EkXxMq3ANC9pnZJ1TfCq4lQRHFVv7ZNhrJq9qJ2V%2FSkW9f9cN8qcHTsZyQHW1caG%2B3qrOZw9OGafYPQ5gTiiS1wMhLQqUYGy1Uz%2FvAOXKooc2Jh3olqz0WIDceFHmN3TxYD1cgYK%2FM6wTe2p2AwymtJ6DZKqmweCvlvX0awAkmzWo18yRCoEsxoXSK4MRdoYX0r4byqB9vqquL0Wn40VssUammXbnU%2Fq2skht%2FU%2FIRLCYc9v98tpcsM6OyPGT0Ap7N4%2F4HZhPufZ2nCNUOy4WlCneisc0Re2RY7n95Vd%2BZUzxU5sleIBE1Zp3SdADlRxrVEwb7Egl7abYAo%2Fg4qI%2BXZgUR3iGFHbzJ8t6l0LLkPmKUOakpdZ9oSlW4uteD8gwxZPxia4Gqr10XxnzX3wl%2Fe0rteb8XOPCdcM3DNhYa0nq6xVaaBPdJyJy6Z0POyFk%2F6Yuk7iRpyouUWwQ%2FiNEIyaJbGoFEB%2BSyJ3A1Hwx0WcRgdrZDV4yGeMNfBDMpPs6G68kGt6FvLlnRo3CVIFkVRNN8aH4U3wgrugb0lEAUqTMKV84cSTIQTCjZyu6xUaPZQhNsXPSO2MIHC8Ug2OrS%2B%2BnUPkqZyeS2PjoAwd2QCUgJAXqn%2Bk93oEcfPkcSdU8jdjC9oNTJBjqkAbwThtyjJqwBVhJ8fZlr7KaoGCTRz49c8UhZW3nrAk6n5TdXuh1j7bq4OExiqvAjRLvXwSFay%2FLWwPxSeZlsK9RIfnopKljy9CBe%2FA7eJfgWXupCYPlomQoj%2Bm98NFRsGmGQGoAU8qqSAp6%2B4xfMY9PnDmTq9E41Iu%2FnLsFJbh0cciADFasvMHoN83iG4r5ZmhXpw6ZHTk0%2B5j6LZRH3thj4b6FT&X-Amz-Signature=f6445be908d1791142719e7c134c114eb87429ba5dc84ad071917c3950a39635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKAWFAVS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5udx%2Fbp1c%2FyocC7yXBVzyIsC2RZhAHCB5K6Mlz%2FTxLQIhAKTk%2FYl0%2BCP2%2Fff1Qhqr5Bjv8PvcGmGgpFRS4vj9NoYnKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8WXUNv3u4H2EkXxMq3ANC9pnZJ1TfCq4lQRHFVv7ZNhrJq9qJ2V%2FSkW9f9cN8qcHTsZyQHW1caG%2B3qrOZw9OGafYPQ5gTiiS1wMhLQqUYGy1Uz%2FvAOXKooc2Jh3olqz0WIDceFHmN3TxYD1cgYK%2FM6wTe2p2AwymtJ6DZKqmweCvlvX0awAkmzWo18yRCoEsxoXSK4MRdoYX0r4byqB9vqquL0Wn40VssUammXbnU%2Fq2skht%2FU%2FIRLCYc9v98tpcsM6OyPGT0Ap7N4%2F4HZhPufZ2nCNUOy4WlCneisc0Re2RY7n95Vd%2BZUzxU5sleIBE1Zp3SdADlRxrVEwb7Egl7abYAo%2Fg4qI%2BXZgUR3iGFHbzJ8t6l0LLkPmKUOakpdZ9oSlW4uteD8gwxZPxia4Gqr10XxnzX3wl%2Fe0rteb8XOPCdcM3DNhYa0nq6xVaaBPdJyJy6Z0POyFk%2F6Yuk7iRpyouUWwQ%2FiNEIyaJbGoFEB%2BSyJ3A1Hwx0WcRgdrZDV4yGeMNfBDMpPs6G68kGt6FvLlnRo3CVIFkVRNN8aH4U3wgrugb0lEAUqTMKV84cSTIQTCjZyu6xUaPZQhNsXPSO2MIHC8Ug2OrS%2B%2BnUPkqZyeS2PjoAwd2QCUgJAXqn%2Bk93oEcfPkcSdU8jdjC9oNTJBjqkAbwThtyjJqwBVhJ8fZlr7KaoGCTRz49c8UhZW3nrAk6n5TdXuh1j7bq4OExiqvAjRLvXwSFay%2FLWwPxSeZlsK9RIfnopKljy9CBe%2FA7eJfgWXupCYPlomQoj%2Bm98NFRsGmGQGoAU8qqSAp6%2B4xfMY9PnDmTq9E41Iu%2FnLsFJbh0cciADFasvMHoN83iG4r5ZmhXpw6ZHTk0%2B5j6LZRH3thj4b6FT&X-Amz-Signature=116de16859f2cb9c100ed589daf6c80aa47213242350b68ca47aac22a2305822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

