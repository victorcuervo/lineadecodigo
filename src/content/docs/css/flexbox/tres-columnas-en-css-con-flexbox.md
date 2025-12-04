---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63QHTHD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBbcmUm%2FKlbunR9jJ4eDZbOiSogMYDBugNPKKqHDVz7NAiEAvbmD42XPa6vJ7JO5SrAE9bS%2B8HqZ9NSleza8i%2BgeK%2Bkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJzydF1iu974OHs0USrcAwprPvFhmjPOu7Ta%2Bw4uoRLcGyucfKAthVZXobIMl71iPwFbEINRemYT5oEmgV9kqid%2Fz0IlJqlVDFXDLhhjyztnxEa3iMRIxTOjUgJ%2FPb8MidbPfsV9DV2j2M%2F6haRKqV%2Fpy9DTFRjOyIYrwEz4rA%2BblwNfJw2rREI%2Fie8t4fAKT3cEX%2FUxd%2FFP4m1tKwj7IEf3oP7AjEj4v%2Bqekmz%2F6yRjE3KZ0Kw%2Fff4HszhfYBOGYJu0k2Gdvh5pwBLxzI9f%2FwJIdrfu7W%2F2DmKSANczWVlVb7NzzK%2BF7qd2WEZQv3BLHGw5dndlRS6YXUA0l2NliHH7QAUFqPcicTftEldxZYd5yGxHmyBJIwH6RUCCnzP%2FH46rZMLsk9iK88zWGEObL6beHXmux7PUZlcSAKpqJGIy3QlkFZn60Qaqe2gip6eX6VMgzEoEZazGk7XNiAOB9N2YyHp94suhs2xx07Eu%2BTz7iKtStL0QQCUn81NZu%2BTqCAQvJE3Hi%2BSc92bYX0n7S4Jcyn9HgVMtsf4A1kDQx6Vn%2BYmJU1%2FCeNZZvtCi8mkVfZ2%2Fne7HfHe8mikG3%2BfMTPk2lw4b3aqVUHMgCWL8%2Bi%2BASZgDlmpZHlgAMN4bErKdhDjMawsPwkGc0ctpMMHKxMkGOqUB40v1yXMA80EQsYD4%2Bb4kxxDpxuXqOMRulfEowI4yxHkzZ4OWi%2BWVLh4Ot7gMHeaiTvEZpoD%2B7X9mSAS8wqXQx4RCrD1sUrA64lPTBmpZjnoKaio4Kw%2FAJgSQWrU9gzRhW2q7EJm%2Bkxe7z1slGf3JBCF4EooWZrlYTBTWBsX%2B7k5WoUWFqQufv8Tkdgwz%2FtSvVswHFDYeRm%2FJJo8M1CZAt08OyfxQ&X-Amz-Signature=f401dfbf49bf0bf33de95aaeb4ce247bf25332f48da965446f16715de7dab3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63QHTHD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBbcmUm%2FKlbunR9jJ4eDZbOiSogMYDBugNPKKqHDVz7NAiEAvbmD42XPa6vJ7JO5SrAE9bS%2B8HqZ9NSleza8i%2BgeK%2Bkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJzydF1iu974OHs0USrcAwprPvFhmjPOu7Ta%2Bw4uoRLcGyucfKAthVZXobIMl71iPwFbEINRemYT5oEmgV9kqid%2Fz0IlJqlVDFXDLhhjyztnxEa3iMRIxTOjUgJ%2FPb8MidbPfsV9DV2j2M%2F6haRKqV%2Fpy9DTFRjOyIYrwEz4rA%2BblwNfJw2rREI%2Fie8t4fAKT3cEX%2FUxd%2FFP4m1tKwj7IEf3oP7AjEj4v%2Bqekmz%2F6yRjE3KZ0Kw%2Fff4HszhfYBOGYJu0k2Gdvh5pwBLxzI9f%2FwJIdrfu7W%2F2DmKSANczWVlVb7NzzK%2BF7qd2WEZQv3BLHGw5dndlRS6YXUA0l2NliHH7QAUFqPcicTftEldxZYd5yGxHmyBJIwH6RUCCnzP%2FH46rZMLsk9iK88zWGEObL6beHXmux7PUZlcSAKpqJGIy3QlkFZn60Qaqe2gip6eX6VMgzEoEZazGk7XNiAOB9N2YyHp94suhs2xx07Eu%2BTz7iKtStL0QQCUn81NZu%2BTqCAQvJE3Hi%2BSc92bYX0n7S4Jcyn9HgVMtsf4A1kDQx6Vn%2BYmJU1%2FCeNZZvtCi8mkVfZ2%2Fne7HfHe8mikG3%2BfMTPk2lw4b3aqVUHMgCWL8%2Bi%2BASZgDlmpZHlgAMN4bErKdhDjMawsPwkGc0ctpMMHKxMkGOqUB40v1yXMA80EQsYD4%2Bb4kxxDpxuXqOMRulfEowI4yxHkzZ4OWi%2BWVLh4Ot7gMHeaiTvEZpoD%2B7X9mSAS8wqXQx4RCrD1sUrA64lPTBmpZjnoKaio4Kw%2FAJgSQWrU9gzRhW2q7EJm%2Bkxe7z1slGf3JBCF4EooWZrlYTBTWBsX%2B7k5WoUWFqQufv8Tkdgwz%2FtSvVswHFDYeRm%2FJJo8M1CZAt08OyfxQ&X-Amz-Signature=f9754eb723d353602b927d6599b80a557444860f205fd785532659fd2a1c5885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

