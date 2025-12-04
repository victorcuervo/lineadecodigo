---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUCWDFE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICTSmVZ5QotuMjonwtJMt61XpMCX%2F4Jo%2Fe8Jf4XKwZeWAiAllGld7zUzo2qgxstER%2FevFMXBX6HJUvkX%2BBpiXyUW%2Byr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMU00qR%2BeYq3gOj6V8KtwDeqU57pCcyZ43WciVpskkVuNcY%2FQcqBKmV04ajfKLMyl2ex7%2FuYV7srCpFmYWEQUPLOc8Lsgq5SaJqWp8m5s71oq1xONngeIPhDIwtrF9NCx%2BbvfhqRbOE2r65PqnYi1tSa1uTwBhKcowpS%2FYbdnQmPCn%2BLd0Wjrl2%2BtHZ4a9zWd9md9cL%2FobzxUaT4i9S%2BACR9PWTXTMElGWWieY7gvyCWV%2BJ5pvBgV2fcua6iJRbC3T6YqfuGxkyNkqXsy3uyZvJphdttDIxFXxInzGpNuzn4EnjT4cfyNjrZf0YOhS7MJpaUM2IZPRxa71%2Fi8rUrPHA2HKN%2FZkMGmCUDJhh%2BR3TQUsebRzw0U7BisyyzCyRRUOv3wOg3%2FxZUFgJymIV5varCo7sk3TXjLqzZH1Bqb%2FgN1efHY%2FLzkP%2BmRq86g8YehkcDjwKN0HAcJIfCuF1B8GZhg%2F31oGJ2bKmCdfvL5TikcE9%2FTOM1tFwwN%2Ffysz50o88vC%2Bl0uOL7ggCuh2Ler1CvD5lmOSkbmbBlJ91CB4W4laI1jeksNknW6vPjA%2BTa1Zj21VmsYJ9j2kEVjacYPO94bWuohdCLcpWWB1YNj7k2m5pHoWOB7a57IQdpT936Mvvu3mDa4axWdcNoEws7XDyQY6pgG5yymbKsJk7egOvBwpLb771Ld%2BOXaJYGC%2BWRh4fcECb%2BSbMFvluw0NkZ%2FFs2QM0T7sufNcIH5%2Bvd5WAnPAmmBfCLjCkeeH99hIGWJgQNpKbMwu76XEnhbTGrBGr%2BypKaYRa7LeLoK4Jktg%2FppBqyu8hOYmJ36%2FOrHeXqpkYgdxdSZUYR08%2BmhRa5PS97k2ZyCr7UOTUOOKbZR8VKoNxwGr2qrdT7jf&X-Amz-Signature=19bfa2de441783854f38a59ee83cfaea4dca8a8685208dcdcb40a1f8c89fc043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUCWDFE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICTSmVZ5QotuMjonwtJMt61XpMCX%2F4Jo%2Fe8Jf4XKwZeWAiAllGld7zUzo2qgxstER%2FevFMXBX6HJUvkX%2BBpiXyUW%2Byr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMU00qR%2BeYq3gOj6V8KtwDeqU57pCcyZ43WciVpskkVuNcY%2FQcqBKmV04ajfKLMyl2ex7%2FuYV7srCpFmYWEQUPLOc8Lsgq5SaJqWp8m5s71oq1xONngeIPhDIwtrF9NCx%2BbvfhqRbOE2r65PqnYi1tSa1uTwBhKcowpS%2FYbdnQmPCn%2BLd0Wjrl2%2BtHZ4a9zWd9md9cL%2FobzxUaT4i9S%2BACR9PWTXTMElGWWieY7gvyCWV%2BJ5pvBgV2fcua6iJRbC3T6YqfuGxkyNkqXsy3uyZvJphdttDIxFXxInzGpNuzn4EnjT4cfyNjrZf0YOhS7MJpaUM2IZPRxa71%2Fi8rUrPHA2HKN%2FZkMGmCUDJhh%2BR3TQUsebRzw0U7BisyyzCyRRUOv3wOg3%2FxZUFgJymIV5varCo7sk3TXjLqzZH1Bqb%2FgN1efHY%2FLzkP%2BmRq86g8YehkcDjwKN0HAcJIfCuF1B8GZhg%2F31oGJ2bKmCdfvL5TikcE9%2FTOM1tFwwN%2Ffysz50o88vC%2Bl0uOL7ggCuh2Ler1CvD5lmOSkbmbBlJ91CB4W4laI1jeksNknW6vPjA%2BTa1Zj21VmsYJ9j2kEVjacYPO94bWuohdCLcpWWB1YNj7k2m5pHoWOB7a57IQdpT936Mvvu3mDa4axWdcNoEws7XDyQY6pgG5yymbKsJk7egOvBwpLb771Ld%2BOXaJYGC%2BWRh4fcECb%2BSbMFvluw0NkZ%2FFs2QM0T7sufNcIH5%2Bvd5WAnPAmmBfCLjCkeeH99hIGWJgQNpKbMwu76XEnhbTGrBGr%2BypKaYRa7LeLoK4Jktg%2FppBqyu8hOYmJ36%2FOrHeXqpkYgdxdSZUYR08%2BmhRa5PS97k2ZyCr7UOTUOOKbZR8VKoNxwGr2qrdT7jf&X-Amz-Signature=c80196eb735028947aea66d8974250e205e44eb7ee1513bc5156d1d65ee266b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

