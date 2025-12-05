---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2D36JI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMckkXuiHuZgTLjB%2BQ%2BSPL1V8YHrb7zQ%2ByGN64lHy8yAiALKDasX8OXfK85BIk8pXNkw5DKkom659IqWEyTL%2F%2FLayr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BKlEWmLvKFdY1DRHKtwDI%2B6ftXQd2NTCPPk8igwpAEYkMK%2FNnd8j4M2ICnX21EVZswI%2F%2BH7yhKPwovRCbgBsi85hrL5gaj2RuFvmaaPsYjyRt3cNjQ4EyvW2S3b%2BwD22%2B%2FWGQlSOheRiRopC06pDNNWjj7GrmUyepD8nsQW6oMomAtSUoLMt25Y2hBjmpckgQtfwxBAdMikqlGvoRA50fmKZ%2BqXakle9FAdyQKY4Z1fQUTQv8gsJnDFW0OeHhbDgK9tKpMMATU%2BO8gkA%2Bsaogk7dqvdMoPtcFRnP18C0Hhyr5pswGYKbU03fL8rC5OoZkhMUyk%2FlOS9D%2FbvNUWbyOHVOE87LeNIAh8CFxUg2XyNxmMSr9svQnECaLvkiM7DroHIW1NAf09jA%2BbhYo8OZGsWpAuSTKbWbcTFK3LwQmHmjDldzqHCurATw1Fj8EnhIAhXzOURN3M6mzsmiWV%2FysszioXSKVqmCzptcdzs5Jj87qxjCj75Uj%2B1djzpK1iKwu4A3gINx%2Faj%2FdjuSwfIcnSsXEebrdrs6caocvKbxcROeGBF9a48ry7FP41zvHR%2B6lQ0H%2B7aWNqBLnHB6TfE56oVd0batiBoFW%2F4Okc8vxv%2F4yRspSbO6XJG92q1DeLfpDbrkUO4UABvH9P0w5erLyQY6pgEO98bh%2Bfh5%2BWmk%2B3gnUnWOfj6LdkMHo2DefOB6LNdUmOfVKOLQM53UvmZRYFgyT9fEU9XuI8ZLJ18f%2BlNXPCVBlXefnPSjNt4nNUOFSyg3XcdGcJb6SuOcPThgWrcKkvRuanJz%2BVAqnqfqMdqV8cMMNK4JXLTHO5YNqkCm2IgxjkWvnCpS%2B9ATNzN2Fa%2FACm9Cz53sPaJiyLvRoJVSi8XFVtKamsul&X-Amz-Signature=b654838b3fdb6d9a21ee5a20f8f03f9c4a108ed0de5226179b5523608c4edc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2D36JI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMckkXuiHuZgTLjB%2BQ%2BSPL1V8YHrb7zQ%2ByGN64lHy8yAiALKDasX8OXfK85BIk8pXNkw5DKkom659IqWEyTL%2F%2FLayr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BKlEWmLvKFdY1DRHKtwDI%2B6ftXQd2NTCPPk8igwpAEYkMK%2FNnd8j4M2ICnX21EVZswI%2F%2BH7yhKPwovRCbgBsi85hrL5gaj2RuFvmaaPsYjyRt3cNjQ4EyvW2S3b%2BwD22%2B%2FWGQlSOheRiRopC06pDNNWjj7GrmUyepD8nsQW6oMomAtSUoLMt25Y2hBjmpckgQtfwxBAdMikqlGvoRA50fmKZ%2BqXakle9FAdyQKY4Z1fQUTQv8gsJnDFW0OeHhbDgK9tKpMMATU%2BO8gkA%2Bsaogk7dqvdMoPtcFRnP18C0Hhyr5pswGYKbU03fL8rC5OoZkhMUyk%2FlOS9D%2FbvNUWbyOHVOE87LeNIAh8CFxUg2XyNxmMSr9svQnECaLvkiM7DroHIW1NAf09jA%2BbhYo8OZGsWpAuSTKbWbcTFK3LwQmHmjDldzqHCurATw1Fj8EnhIAhXzOURN3M6mzsmiWV%2FysszioXSKVqmCzptcdzs5Jj87qxjCj75Uj%2B1djzpK1iKwu4A3gINx%2Faj%2FdjuSwfIcnSsXEebrdrs6caocvKbxcROeGBF9a48ry7FP41zvHR%2B6lQ0H%2B7aWNqBLnHB6TfE56oVd0batiBoFW%2F4Okc8vxv%2F4yRspSbO6XJG92q1DeLfpDbrkUO4UABvH9P0w5erLyQY6pgEO98bh%2Bfh5%2BWmk%2B3gnUnWOfj6LdkMHo2DefOB6LNdUmOfVKOLQM53UvmZRYFgyT9fEU9XuI8ZLJ18f%2BlNXPCVBlXefnPSjNt4nNUOFSyg3XcdGcJb6SuOcPThgWrcKkvRuanJz%2BVAqnqfqMdqV8cMMNK4JXLTHO5YNqkCm2IgxjkWvnCpS%2B9ATNzN2Fa%2FACm9Cz53sPaJiyLvRoJVSi8XFVtKamsul&X-Amz-Signature=341d3e03ec9b1586401cf5ee4d6ce7e89a9e585c981a87f32b16063c1dd50fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

