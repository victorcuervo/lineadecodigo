---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCB5IBP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwas36QatqQHyQb0Y9u8ogH8sTTLYAQ9ne8SxyExD1gIhAM581h24zbLvIrx%2BLQ279QxuKrbeEGKNXMAfS4EbWmcHKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKD8ewkH39RyMoRnMq3ANkjosJsL8VPMy6P29P1m%2BzK0FmohVqolT1wcDD%2BbVjN9Htp6AO6sWWTTk8xdRPnJMH85c8gbYwpd%2Bos8VMEx3A%2Bo8e%2F4mF6mKYo9yWPq%2BoWMWCZazsvFdr2jUZoz5mS9j4a2MizKvUMWyrQxf5g2tHYd3XO0LyfYn8RjIzu5RD4kL3jBCv2Mqu6Rb%2BEW29kAHyJffp%2F6hevVpfprTRK32qWRChFp6b7QkZE%2FDVoaW17g%2F0mJA5mLdiztdCnMkh1HDbYNh6Y%2FEsm9FUVWglU2DNwak42VgE%2F3ceXQZmAzuwjme2MDa%2Bf9Ql2mx%2FBwEOpsGL5gk3m3sfNPupOu6ZKOZCbx%2Butxu0OjeYZQ216h5FSSVYLepJGsTF7jOTockXNxGlVFfMG5b%2BbIRohDUnxpwlUQL3UerT3INjeUIP2tHWSj6F8H2MYLwzarIAMEfiU%2FXeK4PU3Z0zZakkyvbTm1I%2BgFe8f0pnbsZd%2BEI1poK8%2Fht8IlhSHheoO%2FX3IyPQVZZ76unPftsYLR1e3T84jt6cjMS8lalOY3qUyuBkn7MpEYp9rToW7R5scBZ0X%2BFUOU2RpXkhYM8G6UoFJEz7HOsE2Bhp%2BEvFQW%2BiuJ5%2BbkZ8T9ZdjmuxIRQqLHr25DDUlNnJBjqkAXSo3xd5yxBqxAlIpM8pI00Lk2YsbUdhU4QI9YMFP%2BiY92YY7gnyYq3b273XgFV7xhgrRwcwmNindVougIO4k%2FzD2vzdr2IBM3cOuQzsYT0SfxR9me1xvsSXaZhuYj%2B%2BhLp2GosmfVhFhZJplixcfKbpbx5b9SEwra7PdIq0nlzKPEbgV55%2BXZnoaG7p9vQSazCZwj8iiQ1KplMmwt1u%2F0CYMX%2Bn&X-Amz-Signature=83e2faba9c26c61f1541ac21d1d98e70ea732df064669fff85329aca3a8d09a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCB5IBP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwas36QatqQHyQb0Y9u8ogH8sTTLYAQ9ne8SxyExD1gIhAM581h24zbLvIrx%2BLQ279QxuKrbeEGKNXMAfS4EbWmcHKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKD8ewkH39RyMoRnMq3ANkjosJsL8VPMy6P29P1m%2BzK0FmohVqolT1wcDD%2BbVjN9Htp6AO6sWWTTk8xdRPnJMH85c8gbYwpd%2Bos8VMEx3A%2Bo8e%2F4mF6mKYo9yWPq%2BoWMWCZazsvFdr2jUZoz5mS9j4a2MizKvUMWyrQxf5g2tHYd3XO0LyfYn8RjIzu5RD4kL3jBCv2Mqu6Rb%2BEW29kAHyJffp%2F6hevVpfprTRK32qWRChFp6b7QkZE%2FDVoaW17g%2F0mJA5mLdiztdCnMkh1HDbYNh6Y%2FEsm9FUVWglU2DNwak42VgE%2F3ceXQZmAzuwjme2MDa%2Bf9Ql2mx%2FBwEOpsGL5gk3m3sfNPupOu6ZKOZCbx%2Butxu0OjeYZQ216h5FSSVYLepJGsTF7jOTockXNxGlVFfMG5b%2BbIRohDUnxpwlUQL3UerT3INjeUIP2tHWSj6F8H2MYLwzarIAMEfiU%2FXeK4PU3Z0zZakkyvbTm1I%2BgFe8f0pnbsZd%2BEI1poK8%2Fht8IlhSHheoO%2FX3IyPQVZZ76unPftsYLR1e3T84jt6cjMS8lalOY3qUyuBkn7MpEYp9rToW7R5scBZ0X%2BFUOU2RpXkhYM8G6UoFJEz7HOsE2Bhp%2BEvFQW%2BiuJ5%2BbkZ8T9ZdjmuxIRQqLHr25DDUlNnJBjqkAXSo3xd5yxBqxAlIpM8pI00Lk2YsbUdhU4QI9YMFP%2BiY92YY7gnyYq3b273XgFV7xhgrRwcwmNindVougIO4k%2FzD2vzdr2IBM3cOuQzsYT0SfxR9me1xvsSXaZhuYj%2B%2BhLp2GosmfVhFhZJplixcfKbpbx5b9SEwra7PdIq0nlzKPEbgV55%2BXZnoaG7p9vQSazCZwj8iiQ1KplMmwt1u%2F0CYMX%2Bn&X-Amz-Signature=a9669fe494e05d9ec76269f508d9c0089050726a3437db2f7d25da328d295b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

