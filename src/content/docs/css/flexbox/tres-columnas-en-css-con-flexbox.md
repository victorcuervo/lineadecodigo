---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYBNWMH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHGhkzsWJ%2FEjGvLVIAJhg6azqEni7pT19537R%2BAhAFsAiAoJOelP881q3iI6o3JBY%2BcSEtneqqYJxCHhNEuUb5fsCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM1nooYyGVVdLcVfs8KtwDs01MNxWJNwBgSX2RZuhcKmEHSEsmzCrjgBKb8vNyGR0fFhRWhSS4eRduy1oDp3mn0qgmRk3GKXHHVBttcDuZgsRCw8ZYNGaLz5xYhz%2B15%2BdkCTQG6nLZD7pQiolSqWpYWRytqsbEZu%2BrJyVvt2FBh4bSaKS6EjiTbEM7mIXdEzTlrEiOApsrzHceqz0zClOrFI%2BJ352SYUyH5TBa1tdDl%2BlE8udDVFjcWY5ehmhBeBufJtuy%2BKCM0ToUtGa0jlsLRIbFXnzQLpZXGbicRSzxmTR6jAVbidznShDHQdsCKF8YeI1y6LHilRo%2BO5FW%2BYfC5u%2BqZjEmKadd2HNNTUuGoWdu1%2BnNldr7I2DTgm6yySGMFciyRXwHlopxrTvLKik5cPDyzsjj%2FfwxhXpP8sVfx4qUXvb95zAjxGGzsgGWPlea9tpwKuxop6J2%2Fjy0iswa5GVM1tH7zqIhNVIIjfmvq%2B2Tr%2F3GydarW39EB%2FyO8GmFYIGFlCU4oZ9M%2F9p9itYoVwb0p%2FY0Z8Ch5%2FoQOJIU0qGAVaNOJN%2FEORvCTy5rzCAtYkcQ5amcQIRIoLkY9vsACagT7gcvA3MC%2FG1EF1z3w3a89l49jHd8dOLXl17Ollbjs4ydtiHJo6OobZ0w%2F57PyQY6pgEhPGCTdTGehS7kiNqLqeP6PUtBklTVV8vTbN8VK9imRbAylJVZYdeJNfUi8dmcU4FSDL0lbiH4VyCqhkx9xxOr2H%2BmBiBa92e2ZdtqavfsWAz%2BGr7aPYABzsklX%2B9q1N2RFkfwNeVnDwO8aFrljSNc8pgo6NX06T0Mx%2FqYWVDA%2Fn5aLik%2FhvO0x6AvNLP2sU8O6UaaP8gDE8HwA6XonE6YgPQbG9nK&X-Amz-Signature=305f94100d6665aeb77c2ed899026a1e3a1b505631baebb46f3e93cd86f0eb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYBNWMH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHGhkzsWJ%2FEjGvLVIAJhg6azqEni7pT19537R%2BAhAFsAiAoJOelP881q3iI6o3JBY%2BcSEtneqqYJxCHhNEuUb5fsCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM1nooYyGVVdLcVfs8KtwDs01MNxWJNwBgSX2RZuhcKmEHSEsmzCrjgBKb8vNyGR0fFhRWhSS4eRduy1oDp3mn0qgmRk3GKXHHVBttcDuZgsRCw8ZYNGaLz5xYhz%2B15%2BdkCTQG6nLZD7pQiolSqWpYWRytqsbEZu%2BrJyVvt2FBh4bSaKS6EjiTbEM7mIXdEzTlrEiOApsrzHceqz0zClOrFI%2BJ352SYUyH5TBa1tdDl%2BlE8udDVFjcWY5ehmhBeBufJtuy%2BKCM0ToUtGa0jlsLRIbFXnzQLpZXGbicRSzxmTR6jAVbidznShDHQdsCKF8YeI1y6LHilRo%2BO5FW%2BYfC5u%2BqZjEmKadd2HNNTUuGoWdu1%2BnNldr7I2DTgm6yySGMFciyRXwHlopxrTvLKik5cPDyzsjj%2FfwxhXpP8sVfx4qUXvb95zAjxGGzsgGWPlea9tpwKuxop6J2%2Fjy0iswa5GVM1tH7zqIhNVIIjfmvq%2B2Tr%2F3GydarW39EB%2FyO8GmFYIGFlCU4oZ9M%2F9p9itYoVwb0p%2FY0Z8Ch5%2FoQOJIU0qGAVaNOJN%2FEORvCTy5rzCAtYkcQ5amcQIRIoLkY9vsACagT7gcvA3MC%2FG1EF1z3w3a89l49jHd8dOLXl17Ollbjs4ydtiHJo6OobZ0w%2F57PyQY6pgEhPGCTdTGehS7kiNqLqeP6PUtBklTVV8vTbN8VK9imRbAylJVZYdeJNfUi8dmcU4FSDL0lbiH4VyCqhkx9xxOr2H%2BmBiBa92e2ZdtqavfsWAz%2BGr7aPYABzsklX%2B9q1N2RFkfwNeVnDwO8aFrljSNc8pgo6NX06T0Mx%2FqYWVDA%2Fn5aLik%2FhvO0x6AvNLP2sU8O6UaaP8gDE8HwA6XonE6YgPQbG9nK&X-Amz-Signature=b95d802ba82cbe0b341118334c4d27f16522a2b2b53a6cdacec3c786436ece8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

