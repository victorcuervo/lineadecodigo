---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXR7526%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdbql0eFfrBYUohkINGw4dAKnIp1PnnCb7zi9OXx9DMwIhAIf%2BmB46jUPcZUarBAElaCnNHEjtROibSoE04rmQ52NoKv8DCE8QABoMNjM3NDIzMTgzODA1Igzxbs%2B1U0uCKv8kP6cq3AMt7vJQGKpncEyJ7plfknGi%2Bu4ZfYONfwEyol%2FSLSI96t7c0vVufO0ipsExVLYAV20QPTdOS1k0ZzPKv2AdaK86El%2BM%2B0eV19UBS1bs2kmMAGrh7eMADtzAUW%2B0GAJhSIil%2Feitb5vIkfCuNlsMcby1EWyH8MFvyMnqOv7aC%2FzFmwQ8tZrKGKyuaCoEK4FwcMqAqQ896VaX9TvS5CCXzNdT%2Bz4lORf9hjorQtsNpSFmxQ0ogwlcPjYyuup3SAGEvkQxnCPuZK5Fwd9pr1B2MYHCUyP1h3NkzmT1BTPPyLjMSiH09U0v%2FdyoaRETTafwUKGKyxKjbHn5B3bTWQZz6Ty%2BP%2Bie0DbCTLM6qiRHRv2kQVlHHi4%2F7tUuyFS4S8COYu9w0dEWhpkqjOOaiU5BCFOz6QRDH8y%2B%2Fb3rw0a9UERtu1n7fXj1edUW2J7%2Bn9Fyyk9eDzgji%2Ff9Rn%2FhVZ%2FDfwQkalMXCNY1cOgLjCalb8d8NmyyvNSJiCD2Y8%2BonwDOP4UTmgwaEGWX6VD71992anQUZBHS4CFy7WV74rtb%2F5SJRTAZs%2FrmXelJ2G57fn%2FytQPJaRzFqr5pm1oHb83GqeXiQcjKDwtM7yNE1TijrS6TtrrR6kLfPGxSsMv4pzDyjMjJBjqkAZCySznnAWBBNU9TyMz34SYWWuvO1oo5Qn9B9yMlNzXbUwICR43tBGllYpRnqz%2FsYNY5o2nyN9QSzJ3qqQ9EOh6y3qzF8uxnNL6M00dIhRkyOPoO1XNH0w77eGnYkgf4vawAHau4C5Kc1v8cErfOcLeuEGsK6ezxP7cKLyO85EcqscuQ%2FpO%2BaQaPLD2uw3VuzSmSQaUvQa%2FnVsogbh5YRb8nlR9%2B&X-Amz-Signature=7b750226f5471e0444439ea143ed76038f84460d3a1f718d4000182cce86d1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXR7526%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdbql0eFfrBYUohkINGw4dAKnIp1PnnCb7zi9OXx9DMwIhAIf%2BmB46jUPcZUarBAElaCnNHEjtROibSoE04rmQ52NoKv8DCE8QABoMNjM3NDIzMTgzODA1Igzxbs%2B1U0uCKv8kP6cq3AMt7vJQGKpncEyJ7plfknGi%2Bu4ZfYONfwEyol%2FSLSI96t7c0vVufO0ipsExVLYAV20QPTdOS1k0ZzPKv2AdaK86El%2BM%2B0eV19UBS1bs2kmMAGrh7eMADtzAUW%2B0GAJhSIil%2Feitb5vIkfCuNlsMcby1EWyH8MFvyMnqOv7aC%2FzFmwQ8tZrKGKyuaCoEK4FwcMqAqQ896VaX9TvS5CCXzNdT%2Bz4lORf9hjorQtsNpSFmxQ0ogwlcPjYyuup3SAGEvkQxnCPuZK5Fwd9pr1B2MYHCUyP1h3NkzmT1BTPPyLjMSiH09U0v%2FdyoaRETTafwUKGKyxKjbHn5B3bTWQZz6Ty%2BP%2Bie0DbCTLM6qiRHRv2kQVlHHi4%2F7tUuyFS4S8COYu9w0dEWhpkqjOOaiU5BCFOz6QRDH8y%2B%2Fb3rw0a9UERtu1n7fXj1edUW2J7%2Bn9Fyyk9eDzgji%2Ff9Rn%2FhVZ%2FDfwQkalMXCNY1cOgLjCalb8d8NmyyvNSJiCD2Y8%2BonwDOP4UTmgwaEGWX6VD71992anQUZBHS4CFy7WV74rtb%2F5SJRTAZs%2FrmXelJ2G57fn%2FytQPJaRzFqr5pm1oHb83GqeXiQcjKDwtM7yNE1TijrS6TtrrR6kLfPGxSsMv4pzDyjMjJBjqkAZCySznnAWBBNU9TyMz34SYWWuvO1oo5Qn9B9yMlNzXbUwICR43tBGllYpRnqz%2FsYNY5o2nyN9QSzJ3qqQ9EOh6y3qzF8uxnNL6M00dIhRkyOPoO1XNH0w77eGnYkgf4vawAHau4C5Kc1v8cErfOcLeuEGsK6ezxP7cKLyO85EcqscuQ%2FpO%2BaQaPLD2uw3VuzSmSQaUvQa%2FnVsogbh5YRb8nlR9%2B&X-Amz-Signature=e400e10692b4c748d91fb2120c6cd72b766b5c3f11cd3d5fb88c45acb5f84325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

