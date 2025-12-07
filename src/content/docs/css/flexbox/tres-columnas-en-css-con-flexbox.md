---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMZKZLB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApATpTH%2BS4e5TVjPqXodxol%2BMZfNDk0w30kvWXh8Qr0AiEA54Tji3CMJsxBXf6aV9nMQiIWxcwE07IWz8sxrnUOWVUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8%2B7xAY0S%2F0zcP2xCrcA%2F7RJiJCNmNKbZWPghfY571dMog7TPTGuVqVBJcKql1VIFAGCqn20cjsGXaCzbR4E%2FhS74x4%2B9M%2F9ZJUeHguqJeS3rGX16CpYFEkx1E6dYMhNkQ9yELKCRVnvvof98cphnxHDYeguW3tbbrW3NqQ7iIkpyG1S5pPlDaTwYWVIp6qc2ELYQtsPnZ6ISYZzM%2FMn8Z9nE2i5lGkUoeb2wNGhtU%2BWwmpEXz0BsMH4iYP9ruSj5sSgdBAx1wmhtNFfDDWrift0LtNkOlyAUKYk3fOitlyoEEbXz68ivw%2BIGwTSaryoPQh3YGHr2kA2fnuVNROw9jh3BzIctX9fqc%2FSviiYNlEHWOk47FfUSN4w%2BSmr5sqAmu1NWMqgz%2FEHhxZu2egf1srywLV9a5qwN6xqqc7yuTiyMY6u7KtORHi%2BelhAmxqbFpCIWj0YUuUhW%2BQdDY6bddb%2FYjhK1Hq4zD%2BUMpCG4jMsi7AVpCoFdP820a0VzRf5VRODOsED4Wk%2FeV7SSkdaPHZe%2F33PDx8TLmRv90BjSnMQh6M3ENkdZ8PBNC4xz7mFeqlGgjW3S11K65WTqMAR0gHkiSo2hF6%2F5ABT3d2vKxoOh3uxSkuFxAOT7zNLyAZpdKpNRO61RWTgeuoMLSa1ckGOqUB3UAifySCazkrYsRHWfOQABYtesvqpO%2BnPt6ICuhfHD2YxVD%2FJ9hb%2F9J2w8FnclE5PfQAyvQlxsaWYOLskk6Jd5s2y8mC7mZjFyiABMv7sHHgoYymMgmqtoXd6%2BTvk10FamSScafOHPNs6zLSuHyWc9jY07FUhwbAr1YFeJnPFmqUPewHzsS5E0Xk8wz5GoLn6DsJOTDOTLX%2BELaX2kg85WASjtdn&X-Amz-Signature=f051099e394d2938395d0422ab2cfe43acf636ad012ec98e46cd702135895fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMZKZLB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApATpTH%2BS4e5TVjPqXodxol%2BMZfNDk0w30kvWXh8Qr0AiEA54Tji3CMJsxBXf6aV9nMQiIWxcwE07IWz8sxrnUOWVUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8%2B7xAY0S%2F0zcP2xCrcA%2F7RJiJCNmNKbZWPghfY571dMog7TPTGuVqVBJcKql1VIFAGCqn20cjsGXaCzbR4E%2FhS74x4%2B9M%2F9ZJUeHguqJeS3rGX16CpYFEkx1E6dYMhNkQ9yELKCRVnvvof98cphnxHDYeguW3tbbrW3NqQ7iIkpyG1S5pPlDaTwYWVIp6qc2ELYQtsPnZ6ISYZzM%2FMn8Z9nE2i5lGkUoeb2wNGhtU%2BWwmpEXz0BsMH4iYP9ruSj5sSgdBAx1wmhtNFfDDWrift0LtNkOlyAUKYk3fOitlyoEEbXz68ivw%2BIGwTSaryoPQh3YGHr2kA2fnuVNROw9jh3BzIctX9fqc%2FSviiYNlEHWOk47FfUSN4w%2BSmr5sqAmu1NWMqgz%2FEHhxZu2egf1srywLV9a5qwN6xqqc7yuTiyMY6u7KtORHi%2BelhAmxqbFpCIWj0YUuUhW%2BQdDY6bddb%2FYjhK1Hq4zD%2BUMpCG4jMsi7AVpCoFdP820a0VzRf5VRODOsED4Wk%2FeV7SSkdaPHZe%2F33PDx8TLmRv90BjSnMQh6M3ENkdZ8PBNC4xz7mFeqlGgjW3S11K65WTqMAR0gHkiSo2hF6%2F5ABT3d2vKxoOh3uxSkuFxAOT7zNLyAZpdKpNRO61RWTgeuoMLSa1ckGOqUB3UAifySCazkrYsRHWfOQABYtesvqpO%2BnPt6ICuhfHD2YxVD%2FJ9hb%2F9J2w8FnclE5PfQAyvQlxsaWYOLskk6Jd5s2y8mC7mZjFyiABMv7sHHgoYymMgmqtoXd6%2BTvk10FamSScafOHPNs6zLSuHyWc9jY07FUhwbAr1YFeJnPFmqUPewHzsS5E0Xk8wz5GoLn6DsJOTDOTLX%2BELaX2kg85WASjtdn&X-Amz-Signature=1d00ef44f181c349218c7a8a27e0baad720496b57a9dd183453d489b61abd203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

