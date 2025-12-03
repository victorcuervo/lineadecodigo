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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCVVP6N2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBbVswoO06AhTjEDd8kObFPVOYT1ECNMQVOVYrn5kriKAiAUTW5%2FPBayyUi5xik%2Fqj40FXx17HuYX4YZYG1FO4k%2Bnyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMOJhPpN5xB36pVkCGKtwDUz6aFQhVtHHrUspnmr2RoMyiTT4zLFOumT7MDzDLWWfXhogOUV5rV9FXrmQPGrNgKmIt6VBsYPiPS44WSrj%2FtbjzXRFzUEM44PWERvDZG42mbO%2FyGJVMM1EkaKLyKYEFceISQZUeakXQ2VrQwjhXklE%2BE5M%2FmC5lsAno984BLVBP5suC2p6rsMr4O4XWmfPFt24rofG1vUWKoiSCtXClhSZIOBst5S6hI5l%2BJtbvGh%2FgD%2BDd3NUWJWP42yOsP%2FgX7h5sUMgbWhtvivB5zirsPI0Vfkq7Qc5u31lCuAB6tGUGCBYdjej%2Bqpfv9Mw9pk8creLXwLJegMbY6K7XrBzMuy%2F3HlLpMfIsv740b00mR5Kqs7BIGBHW6hx9o%2F%2FOokgdVirFyi550jIK2I4TRbm3l4LO6MY3SyW5XkY5YtsoUMrUGm8wpaXvv2Z2fAFbjx8vrtj8cMyE7X%2BPJWF1Hmr3%2F97257pYH2GxUZz7zejZEjMmQ71MGoMleqc7e%2F8pmvV0sfV%2F8QwlIe91STQX8n3kVM1S1M8muZt5iPDin8QbnS7av4PO9zEsrm9kPzuEh60OIzrA%2FTozeFFhx0dPkiYQzWys2cRdqwu8zpqFgxAb6LqFGrZ5P7ME1pxbd6gw2f69yQY6pgHaAaetpQ5psk1NZD2GHtUpYVE5Sug7cChZ2I%2B6qqb%2FDK8eMix0JMwelX9SLeC8a76UyAuYU5UnyX0XZ1hUFefljLSIjex8N6uWk32n9JV3NyFle6TQsjMsf%2FB7oYA7yu%2BufTJiPgt0QkpT2oBxjpPTW%2Fh16efPT5%2BxfLoPEk%2BejVbwiMP%2FPD6uyowWAyiK5uOi6S5zeglLXI0cpg3nhy2xSuK4Iu3b&X-Amz-Signature=37ca3ac1e030ac920ec004b4e939d2b3eae1d9a1e7541a07eaa3597eac4bdc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCVVP6N2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBbVswoO06AhTjEDd8kObFPVOYT1ECNMQVOVYrn5kriKAiAUTW5%2FPBayyUi5xik%2Fqj40FXx17HuYX4YZYG1FO4k%2Bnyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMOJhPpN5xB36pVkCGKtwDUz6aFQhVtHHrUspnmr2RoMyiTT4zLFOumT7MDzDLWWfXhogOUV5rV9FXrmQPGrNgKmIt6VBsYPiPS44WSrj%2FtbjzXRFzUEM44PWERvDZG42mbO%2FyGJVMM1EkaKLyKYEFceISQZUeakXQ2VrQwjhXklE%2BE5M%2FmC5lsAno984BLVBP5suC2p6rsMr4O4XWmfPFt24rofG1vUWKoiSCtXClhSZIOBst5S6hI5l%2BJtbvGh%2FgD%2BDd3NUWJWP42yOsP%2FgX7h5sUMgbWhtvivB5zirsPI0Vfkq7Qc5u31lCuAB6tGUGCBYdjej%2Bqpfv9Mw9pk8creLXwLJegMbY6K7XrBzMuy%2F3HlLpMfIsv740b00mR5Kqs7BIGBHW6hx9o%2F%2FOokgdVirFyi550jIK2I4TRbm3l4LO6MY3SyW5XkY5YtsoUMrUGm8wpaXvv2Z2fAFbjx8vrtj8cMyE7X%2BPJWF1Hmr3%2F97257pYH2GxUZz7zejZEjMmQ71MGoMleqc7e%2F8pmvV0sfV%2F8QwlIe91STQX8n3kVM1S1M8muZt5iPDin8QbnS7av4PO9zEsrm9kPzuEh60OIzrA%2FTozeFFhx0dPkiYQzWys2cRdqwu8zpqFgxAb6LqFGrZ5P7ME1pxbd6gw2f69yQY6pgHaAaetpQ5psk1NZD2GHtUpYVE5Sug7cChZ2I%2B6qqb%2FDK8eMix0JMwelX9SLeC8a76UyAuYU5UnyX0XZ1hUFefljLSIjex8N6uWk32n9JV3NyFle6TQsjMsf%2FB7oYA7yu%2BufTJiPgt0QkpT2oBxjpPTW%2Fh16efPT5%2BxfLoPEk%2BejVbwiMP%2FPD6uyowWAyiK5uOi6S5zeglLXI0cpg3nhy2xSuK4Iu3b&X-Amz-Signature=835201464197aba93379cffbe1a3a21288d4ce50133bab7a6661957298006d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

