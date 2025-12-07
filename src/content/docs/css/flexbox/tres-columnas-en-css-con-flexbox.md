---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5WA2FER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIxpsRKjZX71tc593410uWzpRohzwvmciU63Io%2BUZeaAiB9LjsVfB%2B0mccSM1dMFd6yAWsV4KZtJsEm1MsVo7tmWSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtgpFBn4mOro0MGYGKtwDHi49Kqf6G%2F203H1Ev18kqu1ETN12IqBe%2F%2F4kpqRKsdVIRP%2BE84qRgzwgRgZ8YbNhBN8hDQqS%2FqV%2F%2F2575yHIRMbeOC5QB3BIvQi85wBsWyS8O9uLWMu5g7T1IMdp7yRX3tby70nNhr2Kbx2%2FQZGvyvUtaAekwn7M0cLjmLdAsDtD9pHKrXu046qf3jfa0%2F0Bti6zwSODAjcuRQvOKPVvzifUGpiZo8dq4kcLVHVEB4zdblXWazYf7ejE9xUrwu6wy9BkEiVoDIulRoXINFBQEE%2B8T9ft5QVfi4ADUrZvoAevud500EDzopA2ZhcHZWi2ln10O6BOP2i8t%2BzgZMbhCD5VCpJHBxoU6Ul8VEadL2YzZsg3yhSwOUxOPrP1WJGUQrso9MJl1cn%2FFJB%2Fhar7O8W0BU0Xm834elQr48FbYovkgklzsMfVHEpWxus3s9fpB7iNYvy5WDwxQkpq4DZuGg%2FgZyB2LUWmLyL%2FUjDjkbNs8cjsQ6o9GZmbTzwF3i6L9wt4VPTJ%2BTc4RcTvkJ7x6iEli2SrFSD1QuSS42fBhiSUhD%2BiO%2BqUEuxG0WxxqEpJ8RJBc36AlYhFh2ddijkIbvphwR3v8fGZUO9SJNsgDKmFHCdv36K402zn8DYw6pnVyQY6pgHm74PfjhFpndxdvoW06YaUBMR1hRFZVqMm8iTwRfK9PgOrtD6yVrbiXGkKVNLAUBwxQtTiajzFyS0XAEdPMSoC%2FLP9H69FiHAE19KUvHDwZ7JmM5zoQ3b%2FTgeHHs9fVUgGwHnaw5%2FRV967tJi2xuE05RpVK28N0eXjiMoJU5nSa4KolMDVN0NtxRVpNfZp%2BkmftabHdklCksDpitfTPJ7dBTwiJDQ6&X-Amz-Signature=759c525754174a82cc0256118c95e4ef018dcae6244c6c8a7a8d71feeb6fc2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5WA2FER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIxpsRKjZX71tc593410uWzpRohzwvmciU63Io%2BUZeaAiB9LjsVfB%2B0mccSM1dMFd6yAWsV4KZtJsEm1MsVo7tmWSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtgpFBn4mOro0MGYGKtwDHi49Kqf6G%2F203H1Ev18kqu1ETN12IqBe%2F%2F4kpqRKsdVIRP%2BE84qRgzwgRgZ8YbNhBN8hDQqS%2FqV%2F%2F2575yHIRMbeOC5QB3BIvQi85wBsWyS8O9uLWMu5g7T1IMdp7yRX3tby70nNhr2Kbx2%2FQZGvyvUtaAekwn7M0cLjmLdAsDtD9pHKrXu046qf3jfa0%2F0Bti6zwSODAjcuRQvOKPVvzifUGpiZo8dq4kcLVHVEB4zdblXWazYf7ejE9xUrwu6wy9BkEiVoDIulRoXINFBQEE%2B8T9ft5QVfi4ADUrZvoAevud500EDzopA2ZhcHZWi2ln10O6BOP2i8t%2BzgZMbhCD5VCpJHBxoU6Ul8VEadL2YzZsg3yhSwOUxOPrP1WJGUQrso9MJl1cn%2FFJB%2Fhar7O8W0BU0Xm834elQr48FbYovkgklzsMfVHEpWxus3s9fpB7iNYvy5WDwxQkpq4DZuGg%2FgZyB2LUWmLyL%2FUjDjkbNs8cjsQ6o9GZmbTzwF3i6L9wt4VPTJ%2BTc4RcTvkJ7x6iEli2SrFSD1QuSS42fBhiSUhD%2BiO%2BqUEuxG0WxxqEpJ8RJBc36AlYhFh2ddijkIbvphwR3v8fGZUO9SJNsgDKmFHCdv36K402zn8DYw6pnVyQY6pgHm74PfjhFpndxdvoW06YaUBMR1hRFZVqMm8iTwRfK9PgOrtD6yVrbiXGkKVNLAUBwxQtTiajzFyS0XAEdPMSoC%2FLP9H69FiHAE19KUvHDwZ7JmM5zoQ3b%2FTgeHHs9fVUgGwHnaw5%2FRV967tJi2xuE05RpVK28N0eXjiMoJU5nSa4KolMDVN0NtxRVpNfZp%2BkmftabHdklCksDpitfTPJ7dBTwiJDQ6&X-Amz-Signature=37cd2823baecd9b24bc475df40c2ddb67539cd26ec642408083e79d136c47b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

