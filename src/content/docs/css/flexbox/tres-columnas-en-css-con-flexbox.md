---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLRWAST%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCetuVMfgym5fxhiuXSsDlW9z5GdoElGBidKzHODGs7WQIgb9NnhjIXT%2FxZD464zt9KPjHncgIiMuIET4Bq3q5Vh94q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUR5vBe34ChItSaTyrcA5e6CQmnA1wjtPHHz3J0%2BefJHiKXcLw%2B4OlbrmXjZLuuVyU31ZquZucuRLmezYwE6K75wGzNsTteDXdhf89KswEHPm8bdNhC7V9f3OpxEhBSiiN8yKs9sjHt1M0bmeLVZv1S2IPxxd5d2bSlWMnhY3c6ypmkthTLKxoYxdwLyc1zBTMamSu7cT%2FeQnRyiXcVO4c8d75MKVbpNIQ1QW6NfTTa%2F2BmrUcHfVQtya4Hcpz2%2BRR%2BJtC%2Fd5DSihFuXK74ibK6sZXU7VcD4egXq7Vtk50zOEDc1RkkRbbSBI2lPqGpdMeSH4yulm1ZoolZuDDX8mihDF9epapHjCmD74xx%2F3Qa9MM3BNcYpz9tA75icWqZz59Z4rlVj%2FmoGjiSSxPY6VksRYTa9qvutCY9fO8Zrhl0pQdlZuolFQyoqw%2FjUdmEB5AU5Adnwp9j3sJm8HhEkkd9p8MCG1KXKtk28umcsfFNp2yd6hf85wVJlRIGSexhYrltebSKYUQ4kxsZUB00uuXSrSkBn22AhVXwbKPyQrjctHjPiCiIwLSopSMumlCsE%2FA9sQjpBy%2B%2Bp3nq%2B8m1N7SO071068bO3VgMzz5GGC0APL7CJw00V6JRiwWRUpfcz6%2BRZWhBlzhyiZc6MIrLxMkGOqUBNhrs3Lk1kVV6%2FVE0kSBTqwDfpFvYmSIUu1jNB3T0d40LsUCnXFVAZHz80fl29WpCULLpj2P2419KyFzlj5C0K0BqxZZyWNSwfaU57r4B6CfFMKLBJj664uJFm9HkexYx7wEzrfStgTIgeM5iVVBel4ukhi0iOyX8Da5SvwgwDF5YQo3oHTgBg8%2Bs0jHxaKj3tChdPm6m8fk0%2Bi%2Bb8omQrmZ1vdXt&X-Amz-Signature=4481235574729a4fd018f023323e991d56695816e19f5a308ecf8c5720818e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLRWAST%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCetuVMfgym5fxhiuXSsDlW9z5GdoElGBidKzHODGs7WQIgb9NnhjIXT%2FxZD464zt9KPjHncgIiMuIET4Bq3q5Vh94q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUR5vBe34ChItSaTyrcA5e6CQmnA1wjtPHHz3J0%2BefJHiKXcLw%2B4OlbrmXjZLuuVyU31ZquZucuRLmezYwE6K75wGzNsTteDXdhf89KswEHPm8bdNhC7V9f3OpxEhBSiiN8yKs9sjHt1M0bmeLVZv1S2IPxxd5d2bSlWMnhY3c6ypmkthTLKxoYxdwLyc1zBTMamSu7cT%2FeQnRyiXcVO4c8d75MKVbpNIQ1QW6NfTTa%2F2BmrUcHfVQtya4Hcpz2%2BRR%2BJtC%2Fd5DSihFuXK74ibK6sZXU7VcD4egXq7Vtk50zOEDc1RkkRbbSBI2lPqGpdMeSH4yulm1ZoolZuDDX8mihDF9epapHjCmD74xx%2F3Qa9MM3BNcYpz9tA75icWqZz59Z4rlVj%2FmoGjiSSxPY6VksRYTa9qvutCY9fO8Zrhl0pQdlZuolFQyoqw%2FjUdmEB5AU5Adnwp9j3sJm8HhEkkd9p8MCG1KXKtk28umcsfFNp2yd6hf85wVJlRIGSexhYrltebSKYUQ4kxsZUB00uuXSrSkBn22AhVXwbKPyQrjctHjPiCiIwLSopSMumlCsE%2FA9sQjpBy%2B%2Bp3nq%2B8m1N7SO071068bO3VgMzz5GGC0APL7CJw00V6JRiwWRUpfcz6%2BRZWhBlzhyiZc6MIrLxMkGOqUBNhrs3Lk1kVV6%2FVE0kSBTqwDfpFvYmSIUu1jNB3T0d40LsUCnXFVAZHz80fl29WpCULLpj2P2419KyFzlj5C0K0BqxZZyWNSwfaU57r4B6CfFMKLBJj664uJFm9HkexYx7wEzrfStgTIgeM5iVVBel4ukhi0iOyX8Da5SvwgwDF5YQo3oHTgBg8%2Bs0jHxaKj3tChdPm6m8fk0%2Bi%2Bb8omQrmZ1vdXt&X-Amz-Signature=3cce4e5b4991971ed18ce174be7c9053a4988c514d56106477777b29fed6472b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

