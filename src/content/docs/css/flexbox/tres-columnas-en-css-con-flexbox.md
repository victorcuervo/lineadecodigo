---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJSJJ7C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEZHCui6Tg9xAqYppDHq%2BJLjlQUdnM93FW0ZHtV3sHjAiEA3%2BKKhU6pXnp8eVszEWeyymlWZgG2mVW20YD%2FgDDZzWYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvmbSRWyUj8oRb36SrcAwobDJEDSfusjG%2FBec3yoRp8RbM8IdmOYwZhvZIjuvc7BEmak3IgrC9TnSryeHNiTJRMqLeOOi%2BYAV70Lon%2Fs889ulV2EFvhgD%2BvyyJjtGmXke5DUGkqYWI0JAGlVOjTCbhHmMuy7udx467Km3MaGWiyQ8qr24LQW%2FRdEwCN8HBrwwvJu3GvTSVPxzRWUHD%2F5ECjkulEmjGUHaRSba5KNc%2FNxm8tj6y7oLvH5FdCNNbLKm%2B1tsZr%2Bw5ov0lMpuQ7rQ8TaG5pU5M0sRnvwa%2FJHPiOQpDpOIfHmD83TixFPDorWNdfgAZ44qEnO8cuV42UkB%2FsjuO1WRs1dxQtnm417RIUR9sdUYC2kLuX8pJPH%2BwLe9%2BNHEqwyWch1eIUUJMkBxeGeA4bQ3jZLGg%2Brzmuy%2B5pQjeMgIin4MooBN8Rr1AA870s%2FByyP5AmJmeQnRwaiYWyV0ax%2F7PFSZ2xa9FZi6NrcUdkjrU%2FxGPFyhpCV%2FId0y4Ab%2B2OwKOHeyobAp7a67o2rHvfuJN3OcInJQ3jaQ3VMqbiRab9IHaIftI2QttxuvNzsfVv9SCm85P9HG3aKwMaXX8b7ihKpMNmYMowuI2b8W1dWt42f4EqaZ3OfEoS7NJuBj13AMFltwPpMIfQ2ckGOqUB4bY%2Bx5R6CEpjaN21ng7VoSB7YwtSN9rLwtRsu1aeFkCd2hAP72w0WXWGEi%2B4OD319i2SGfqFQPYdR3Oo%2BfvPSqWZ7fr6g6H0db0MZMyypOH3E4xRxGOnzeu2IkBgjQFa7nyphLqCt1qL8JC7rsIii8ppOi%2FtsKRaNHehXjlyOUW53yCg6XAw2kSfTQSqib47M0KH1oZjMoHcvDuVCLihKuotcVt7&X-Amz-Signature=c0dd0a94921ca145571fb303e4edfdef3b62db155a0e68663a5278aeeddf4289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOJSJJ7C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEZHCui6Tg9xAqYppDHq%2BJLjlQUdnM93FW0ZHtV3sHjAiEA3%2BKKhU6pXnp8eVszEWeyymlWZgG2mVW20YD%2FgDDZzWYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvmbSRWyUj8oRb36SrcAwobDJEDSfusjG%2FBec3yoRp8RbM8IdmOYwZhvZIjuvc7BEmak3IgrC9TnSryeHNiTJRMqLeOOi%2BYAV70Lon%2Fs889ulV2EFvhgD%2BvyyJjtGmXke5DUGkqYWI0JAGlVOjTCbhHmMuy7udx467Km3MaGWiyQ8qr24LQW%2FRdEwCN8HBrwwvJu3GvTSVPxzRWUHD%2F5ECjkulEmjGUHaRSba5KNc%2FNxm8tj6y7oLvH5FdCNNbLKm%2B1tsZr%2Bw5ov0lMpuQ7rQ8TaG5pU5M0sRnvwa%2FJHPiOQpDpOIfHmD83TixFPDorWNdfgAZ44qEnO8cuV42UkB%2FsjuO1WRs1dxQtnm417RIUR9sdUYC2kLuX8pJPH%2BwLe9%2BNHEqwyWch1eIUUJMkBxeGeA4bQ3jZLGg%2Brzmuy%2B5pQjeMgIin4MooBN8Rr1AA870s%2FByyP5AmJmeQnRwaiYWyV0ax%2F7PFSZ2xa9FZi6NrcUdkjrU%2FxGPFyhpCV%2FId0y4Ab%2B2OwKOHeyobAp7a67o2rHvfuJN3OcInJQ3jaQ3VMqbiRab9IHaIftI2QttxuvNzsfVv9SCm85P9HG3aKwMaXX8b7ihKpMNmYMowuI2b8W1dWt42f4EqaZ3OfEoS7NJuBj13AMFltwPpMIfQ2ckGOqUB4bY%2Bx5R6CEpjaN21ng7VoSB7YwtSN9rLwtRsu1aeFkCd2hAP72w0WXWGEi%2B4OD319i2SGfqFQPYdR3Oo%2BfvPSqWZ7fr6g6H0db0MZMyypOH3E4xRxGOnzeu2IkBgjQFa7nyphLqCt1qL8JC7rsIii8ppOi%2FtsKRaNHehXjlyOUW53yCg6XAw2kSfTQSqib47M0KH1oZjMoHcvDuVCLihKuotcVt7&X-Amz-Signature=4c10c0a4a1f8c2078e3d44c6aea1cc3016e36c539ae12de4c8f5682a32ac2cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

