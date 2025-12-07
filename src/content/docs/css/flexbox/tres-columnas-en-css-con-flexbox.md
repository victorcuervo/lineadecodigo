---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OK5PIM7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQW37%2FaMDx9HCPmiXpkkm%2FYW8yeS0qVsi2abYQY613yAiEA%2B2MnNwNfPW7veYaWhM%2B%2FfDw3vpH5%2FKQnuKNsahpy6DsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmck2De9OP7aJoDfCrcA8kOpMfZcffYw9nBGHd2NI6rdICzA0iwjWDYRkp7KZFMsSuwL9oMhm9oHKy7c9P7phke8j1jLsRPA%2Foz7KD4zvHrmtxs9GDYrlogkCP9IiRR8oNi%2BFG6UrL%2FmO4POz3AUkpxyFdHsImwVzIqwq5Yw%2FE2xAeY7gx3mdiraO440A1ydX7gKOou0JaqtodB6rJ%2BlUkdGMjXPFvBPFAR7zjGc9S34%2BE9uIhWlN%2FbILcVpohfCUzUXFgibFbv0O3bnit6ry3sOUBnl9GxJFFCuMmpHtAF5icQWj7p6PUQ18MMr9yPX69Wfr7CWR2ztWHNMJSyI7KzBlE4BOTVc3ZxxEmOu0LD4Jza0r4Vpleu1tP8fBpaokEmhIYT0lVEf7Azms30E0ssJ8ajIwFPjqanLIwwXa93OcZhVFKOVJe%2BYPBxb%2B%2BtVfNRk6uEl0uWsM0EJ%2BP%2BIlwkmszCWQk3sLH97EFVI6h4znSjymjYBW1McHjRDNHdySJt5v11ng5MM76L64kIM%2B8yVrMFJoYctZQbQorweLMEAIT33QBKmDNipBcbx7CkEinAlbweuRdz2VvMz5ZXEDpFDaPSawhRnmv%2Bu1o3oaX4d4V%2BwxoJPa8Ksx51Ef4g6NbNY8wTF61Y2XGEMJeg1MkGOqUBqBrm8r3TmCI0i4B1O4CQ5dNU4oCyx0yxlIVow5yeNDHy9eGdCKq%2FnhDyyD88ZBQHxbh9D1atGyU3tWNRrd0h5WMvkNP49E6RqTy4SM%2F6MnL%2Buwn4aAIONItx%2BPGN3d1%2FDbJrGQlIZQ7e9P858dV%2FeCBuyp4iOL4cmYv9Oe%2BxU5LPAIIVlaXyYao%2Bqiek7N3hsQahL433fDfl5kKO%2Fur5wO4brNPk&X-Amz-Signature=e81893871cf29f4e745d83de932157cc3a8a64c4093e7d6fd54ecb5e6490e8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OK5PIM7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQW37%2FaMDx9HCPmiXpkkm%2FYW8yeS0qVsi2abYQY613yAiEA%2B2MnNwNfPW7veYaWhM%2B%2FfDw3vpH5%2FKQnuKNsahpy6DsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmck2De9OP7aJoDfCrcA8kOpMfZcffYw9nBGHd2NI6rdICzA0iwjWDYRkp7KZFMsSuwL9oMhm9oHKy7c9P7phke8j1jLsRPA%2Foz7KD4zvHrmtxs9GDYrlogkCP9IiRR8oNi%2BFG6UrL%2FmO4POz3AUkpxyFdHsImwVzIqwq5Yw%2FE2xAeY7gx3mdiraO440A1ydX7gKOou0JaqtodB6rJ%2BlUkdGMjXPFvBPFAR7zjGc9S34%2BE9uIhWlN%2FbILcVpohfCUzUXFgibFbv0O3bnit6ry3sOUBnl9GxJFFCuMmpHtAF5icQWj7p6PUQ18MMr9yPX69Wfr7CWR2ztWHNMJSyI7KzBlE4BOTVc3ZxxEmOu0LD4Jza0r4Vpleu1tP8fBpaokEmhIYT0lVEf7Azms30E0ssJ8ajIwFPjqanLIwwXa93OcZhVFKOVJe%2BYPBxb%2B%2BtVfNRk6uEl0uWsM0EJ%2BP%2BIlwkmszCWQk3sLH97EFVI6h4znSjymjYBW1McHjRDNHdySJt5v11ng5MM76L64kIM%2B8yVrMFJoYctZQbQorweLMEAIT33QBKmDNipBcbx7CkEinAlbweuRdz2VvMz5ZXEDpFDaPSawhRnmv%2Bu1o3oaX4d4V%2BwxoJPa8Ksx51Ef4g6NbNY8wTF61Y2XGEMJeg1MkGOqUBqBrm8r3TmCI0i4B1O4CQ5dNU4oCyx0yxlIVow5yeNDHy9eGdCKq%2FnhDyyD88ZBQHxbh9D1atGyU3tWNRrd0h5WMvkNP49E6RqTy4SM%2F6MnL%2Buwn4aAIONItx%2BPGN3d1%2FDbJrGQlIZQ7e9P858dV%2FeCBuyp4iOL4cmYv9Oe%2BxU5LPAIIVlaXyYao%2Bqiek7N3hsQahL433fDfl5kKO%2Fur5wO4brNPk&X-Amz-Signature=96213634c75f45f3ef8ef544b803338622fc4f30ea8d455cd06c1a5d9982309c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

