---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVB6HXN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYLfiaHjvQrvX468%2FOZlHsez%2FsP%2BJ6Ab0K1f6vMy8SrAiEAgODlcHSdAKRDsd6K3zduFc9crURqJBF8LDzuZ7utDgoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLNm%2FS5I9483g1cryrcAx%2BuNiIoX%2FFD5z%2FSfWbLCJsJ1qoG9eb%2B1XsGQfP%2FsBP8bAaIZ6kmM9SAQPk7moOtThpy9jEyad%2Fo826dX9e%2FkJkPq6kOuOtltuiOFdPOL29mC%2Fn01ASWLC1YrMoYRPzJvLw2SO%2BSFxr39eP4YbWX7oF5fB84UKwNNe0fJ%2BIKNdn9wtfmJv6T%2BS02gUURvHMV6nblsRPGSAGD%2BgRrjw5PxIuvIsTiJ8zAQim2qVxH8HLIkLoDs4wLWseJnAzV1tSq3oMYTBM24XCgjhnjGnB80z7pvgZQl3ysc6lG%2B%2BR7Xdc7zUErgA%2B4Z2uZuo0AMH2YYuJRust2eZtOSgNbOyyaLfOCqhZlSMeC8TjIyLaDx3SbQLcYvz0RaH1xy7SPMGOdyWrSEie5rLGi3x%2FNIsi70vXb4x6U6dd98h6q97pVOeVDZcvYuo2EHRaHpyoV%2Fr6PxoyCPfTi%2Fu%2FpVbJmWNulOOZYmd%2B4pufGMYKWv92yBvyOdlbsMyu%2FwhfPRtORIsttoLFFs3Jen1UIxreKWzj0VU0oJmOOTrLFJKqa%2BnYhnzzoddE9f%2FL83MmBA3oRKhub9bv5bZcVR7hZaezMszYO%2BUh7SujXZ8Tsf%2F7zMJt1qfqpCtweCXoMQDP7OGzjMJqZ1ckGOqUBw0aaNB3u%2BK%2F8oN3MSR8PB2PZzmVNPgbeTF2v3gk4JBvM8R9McGhReIW1ZLDJjHXT62Wro7QEOdlRaWSa6tijsQbKzjQl%2FeJaef8OSr4Ywf%2FR4zklGvWV4eYuCTRThBYz9KiPIk%2By3n2MZSOmv5ZQRTmCM4L5M2dWs75AnvSAuhpNNGTLhZc1rtFHDCJ20w%2BkF65LYK5BHpejr%2Fai4Y0Zv3meQiYh&X-Amz-Signature=6d2fb1e141c22cebb2b401b71626d59cd9a04cc9ad89e2ce9a6bc13fee829204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYVB6HXN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYLfiaHjvQrvX468%2FOZlHsez%2FsP%2BJ6Ab0K1f6vMy8SrAiEAgODlcHSdAKRDsd6K3zduFc9crURqJBF8LDzuZ7utDgoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLNm%2FS5I9483g1cryrcAx%2BuNiIoX%2FFD5z%2FSfWbLCJsJ1qoG9eb%2B1XsGQfP%2FsBP8bAaIZ6kmM9SAQPk7moOtThpy9jEyad%2Fo826dX9e%2FkJkPq6kOuOtltuiOFdPOL29mC%2Fn01ASWLC1YrMoYRPzJvLw2SO%2BSFxr39eP4YbWX7oF5fB84UKwNNe0fJ%2BIKNdn9wtfmJv6T%2BS02gUURvHMV6nblsRPGSAGD%2BgRrjw5PxIuvIsTiJ8zAQim2qVxH8HLIkLoDs4wLWseJnAzV1tSq3oMYTBM24XCgjhnjGnB80z7pvgZQl3ysc6lG%2B%2BR7Xdc7zUErgA%2B4Z2uZuo0AMH2YYuJRust2eZtOSgNbOyyaLfOCqhZlSMeC8TjIyLaDx3SbQLcYvz0RaH1xy7SPMGOdyWrSEie5rLGi3x%2FNIsi70vXb4x6U6dd98h6q97pVOeVDZcvYuo2EHRaHpyoV%2Fr6PxoyCPfTi%2Fu%2FpVbJmWNulOOZYmd%2B4pufGMYKWv92yBvyOdlbsMyu%2FwhfPRtORIsttoLFFs3Jen1UIxreKWzj0VU0oJmOOTrLFJKqa%2BnYhnzzoddE9f%2FL83MmBA3oRKhub9bv5bZcVR7hZaezMszYO%2BUh7SujXZ8Tsf%2F7zMJt1qfqpCtweCXoMQDP7OGzjMJqZ1ckGOqUBw0aaNB3u%2BK%2F8oN3MSR8PB2PZzmVNPgbeTF2v3gk4JBvM8R9McGhReIW1ZLDJjHXT62Wro7QEOdlRaWSa6tijsQbKzjQl%2FeJaef8OSr4Ywf%2FR4zklGvWV4eYuCTRThBYz9KiPIk%2By3n2MZSOmv5ZQRTmCM4L5M2dWs75AnvSAuhpNNGTLhZc1rtFHDCJ20w%2BkF65LYK5BHpejr%2Fai4Y0Zv3meQiYh&X-Amz-Signature=3b2628d4e8e5f8b9d6c778ec4f0b8d6cf357d1491e9c0a51307b0d9f3c097b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

