---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVDYCMB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV9KI%2BiIt9HZU3m2OvVKf%2B9MU4bb0jXyRlJb%2FtZh%2BACQIgY%2BbOXfdUuGUmYfWiGGLCskOvx3%2BC2c35bDmeVjH8mIgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjM8KAX7uO5LwpMGSrcA%2FM55A6BvnkLGFT7LexVWrGybfrMP06KWMDOmGP%2Fu%2FSqSFqNr4YXVSRyymgLjXuVGihdqDfWRYgHKXRU2maI0NlVC9gXvYL3LCyL9QDWYdM24YaOwmAX6d0suOUPjBa%2B%2BEmy6XziqcGimOQ1RsaYdVo3oti41Yo3miKV87LxBz7Q7c13UZyhEZ4amU%2BSI61Gx90dCU7hEjuaOSmWpriqDkcRbIY1JmYKVu4m9P8jr%2BE0WLobrz45yWz3vf%2FQfKkKb5H1Ek9fbU8EFrM9dbWmwNMztlINKw16R%2BQIsHTYeZxWYQRkJUiGgyPovbmzib3%2Fj1zgPM%2FzZmrlFpl14teH9uTHdt%2FtP%2FrtyBHfc%2FXY1rOHmIGQ4PkFl3K7nG6l8tCLEmnQdy3eEo33Dh6IoG%2BcM59SdHoEugIPoRoYEvp26dqycjq1sy4vfl8X2qZwClq73uDwJg%2B7va3%2BQ4HnA4TZ1dIF1d4fJanP7vnISKoYC9Zb0r2CcPn9%2Be4mYleZnSPPIEWCvKmsJzfgqJSJSYMr21tWzyWq2dSnpQ3SREWjHQ%2BXv3fVx0dJ%2BxLKI36dHmvOgsvREhFQi4RuxOGyEQoN5dHStfIghwZAfYUv4nufRSG4%2BbUXJRXeS78BbAPsMMeh1MkGOqUBnZ4DrZOSaT0jD5xn5XxMY7qWjnSPwbJKec8deazZrKbXtOSe8XQ4GDFdXnmXDnq0cA5wTEHE9LqJB3asBKbgPlNltl022o1knN41n0yRJJ0e5nSMseNmijGZCzA4TzT74VFq6Hv4hCiTFTROZD2IRhMWIzGK7CVmHJDtkYQdeGf6eYksEV3v2kKmGxv6z47u5%2FTwgvHi%2Bm9P21s24eni%2B%2FAO3xFw&X-Amz-Signature=f747d00b39b0a9427a7d814800be665c08566e9bef12f773288ad066d52223b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVDYCMB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV9KI%2BiIt9HZU3m2OvVKf%2B9MU4bb0jXyRlJb%2FtZh%2BACQIgY%2BbOXfdUuGUmYfWiGGLCskOvx3%2BC2c35bDmeVjH8mIgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjM8KAX7uO5LwpMGSrcA%2FM55A6BvnkLGFT7LexVWrGybfrMP06KWMDOmGP%2Fu%2FSqSFqNr4YXVSRyymgLjXuVGihdqDfWRYgHKXRU2maI0NlVC9gXvYL3LCyL9QDWYdM24YaOwmAX6d0suOUPjBa%2B%2BEmy6XziqcGimOQ1RsaYdVo3oti41Yo3miKV87LxBz7Q7c13UZyhEZ4amU%2BSI61Gx90dCU7hEjuaOSmWpriqDkcRbIY1JmYKVu4m9P8jr%2BE0WLobrz45yWz3vf%2FQfKkKb5H1Ek9fbU8EFrM9dbWmwNMztlINKw16R%2BQIsHTYeZxWYQRkJUiGgyPovbmzib3%2Fj1zgPM%2FzZmrlFpl14teH9uTHdt%2FtP%2FrtyBHfc%2FXY1rOHmIGQ4PkFl3K7nG6l8tCLEmnQdy3eEo33Dh6IoG%2BcM59SdHoEugIPoRoYEvp26dqycjq1sy4vfl8X2qZwClq73uDwJg%2B7va3%2BQ4HnA4TZ1dIF1d4fJanP7vnISKoYC9Zb0r2CcPn9%2Be4mYleZnSPPIEWCvKmsJzfgqJSJSYMr21tWzyWq2dSnpQ3SREWjHQ%2BXv3fVx0dJ%2BxLKI36dHmvOgsvREhFQi4RuxOGyEQoN5dHStfIghwZAfYUv4nufRSG4%2BbUXJRXeS78BbAPsMMeh1MkGOqUBnZ4DrZOSaT0jD5xn5XxMY7qWjnSPwbJKec8deazZrKbXtOSe8XQ4GDFdXnmXDnq0cA5wTEHE9LqJB3asBKbgPlNltl022o1knN41n0yRJJ0e5nSMseNmijGZCzA4TzT74VFq6Hv4hCiTFTROZD2IRhMWIzGK7CVmHJDtkYQdeGf6eYksEV3v2kKmGxv6z47u5%2FTwgvHi%2Bm9P21s24eni%2B%2FAO3xFw&X-Amz-Signature=2c111684750fa5fba7776f05564c0da135254a9e117a0b825247887b524578a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

