---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXKVE3X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEtvcIsFRw2l7rrakkH3EJ7Owmq3RaeZexo9fnlUHMNcAiEA%2BVjok0%2FsmN4ghLeUEE6wg8aGyRGaflp5cq%2B8iHfLu%2Bcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDALFWA6tajtuXDdddircA66ZypdsF5tmnTeIZTP7Kc9a5IEb7ZbiS3QrCoCsKo1DZB43Nyzr3RJ7osRj6mNfq92ZV32ID21EjulquyFJryVE5O%2Bp5G%2Bda8v%2BFNfJM6TPogqQyKk7gzu4ohBlFRa0auzyWKs1nmZu6PyRs%2BFeMMag7Rvq8kyYhT2jBxdwIOIXpWUz5twkbUSe1JPqJpCZPlLtw5r7M4nCxJnm5F5Yt5eZ8iYzzoaQjl6rVUYxoWu4VAs10QwwEbwvd4yLs1x2fOGmfCdWVyEhKu4jTEVah%2B1ZilYbd4TO4i%2F4d%2B1XT5ZyK4GFmtW7Saq8%2FYhBj7qd1kfB11e1tJHi4vvVn34ks0aNg18M%2B3I2r0n%2FCA2tc%2BJiELYOHg0adi%2FStNf9cO2QZtad%2FKpHXJpSjE4ZJX8%2BaMD%2FnBS%2F5vuP9i5AtMaXMgiGmPjaSj8mLAK0uYeUbm7BfvkKLbgceFadZqSH59FMJY%2BeYmY8I3pQ2uafNZP%2BrTXbkuvO8Ll0ZKSlIKY%2BnaKDaNbLRBsJTY6m3ouQmgPq8YcS7YZBK7ksMJwiMM7cjS4i%2FoWlB8Fu7CyYxRb3G5OqU14Bttq7PPTI7zlXn80SFxRDV6vZEMRsn8KDDDzKMKArD%2BlDZ4m2aR8rxoOfMKz4wskGOqUBNHaNqGYiJAQCRe8Bars0hDb8b0BgQ6xRBTJBoAYZn60D29FSQmw3JRMo%2FcukAgzNez%2BI2s1DaEKulNMF4pSFCFdkgK8IBjneI9g97TLVAQP6TqYsuAw%2Fi9XBpRizM%2BLjVuxVI9HEhKavSqQY%2BGKZsIJQp5P9wdPRsCd308wFclf%2FTcA%2FduV6xJacamVkEobSdPuzw%2FMgVejheEil7xprKdaCqVje&X-Amz-Signature=7a125b531461746c1694fbfc8438c30e246417c4d2e2748cf349ba6c17041225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXKVE3X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEtvcIsFRw2l7rrakkH3EJ7Owmq3RaeZexo9fnlUHMNcAiEA%2BVjok0%2FsmN4ghLeUEE6wg8aGyRGaflp5cq%2B8iHfLu%2Bcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDALFWA6tajtuXDdddircA66ZypdsF5tmnTeIZTP7Kc9a5IEb7ZbiS3QrCoCsKo1DZB43Nyzr3RJ7osRj6mNfq92ZV32ID21EjulquyFJryVE5O%2Bp5G%2Bda8v%2BFNfJM6TPogqQyKk7gzu4ohBlFRa0auzyWKs1nmZu6PyRs%2BFeMMag7Rvq8kyYhT2jBxdwIOIXpWUz5twkbUSe1JPqJpCZPlLtw5r7M4nCxJnm5F5Yt5eZ8iYzzoaQjl6rVUYxoWu4VAs10QwwEbwvd4yLs1x2fOGmfCdWVyEhKu4jTEVah%2B1ZilYbd4TO4i%2F4d%2B1XT5ZyK4GFmtW7Saq8%2FYhBj7qd1kfB11e1tJHi4vvVn34ks0aNg18M%2B3I2r0n%2FCA2tc%2BJiELYOHg0adi%2FStNf9cO2QZtad%2FKpHXJpSjE4ZJX8%2BaMD%2FnBS%2F5vuP9i5AtMaXMgiGmPjaSj8mLAK0uYeUbm7BfvkKLbgceFadZqSH59FMJY%2BeYmY8I3pQ2uafNZP%2BrTXbkuvO8Ll0ZKSlIKY%2BnaKDaNbLRBsJTY6m3ouQmgPq8YcS7YZBK7ksMJwiMM7cjS4i%2FoWlB8Fu7CyYxRb3G5OqU14Bttq7PPTI7zlXn80SFxRDV6vZEMRsn8KDDDzKMKArD%2BlDZ4m2aR8rxoOfMKz4wskGOqUBNHaNqGYiJAQCRe8Bars0hDb8b0BgQ6xRBTJBoAYZn60D29FSQmw3JRMo%2FcukAgzNez%2BI2s1DaEKulNMF4pSFCFdkgK8IBjneI9g97TLVAQP6TqYsuAw%2Fi9XBpRizM%2BLjVuxVI9HEhKavSqQY%2BGKZsIJQp5P9wdPRsCd308wFclf%2FTcA%2FduV6xJacamVkEobSdPuzw%2FMgVejheEil7xprKdaCqVje&X-Amz-Signature=1e5e92785fbb65b8839e5a2fbcad7e998650049872d792116d02450fc6e3b877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

