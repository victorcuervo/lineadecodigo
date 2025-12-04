---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOLDIIU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIATDINAjuJoOAnlUrK%2B1RBIZr8%2BAoDq28duf9CXiiXlcAiEA0EH%2FGeu26CYU76i0R706Qa3%2Fmyt5%2BVFGQVz1SaQm9zAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKrna7TV2CZYq2ZJGyrcA%2BMthuczqljL0cFAzQlDBjxThtNEwMM1YWcA63ONCq4MMMEAhJTPvoj4iMqIvs3q5%2B7bsCeB4%2BZnfajjSoDwMHogXtSfd0cPXLaxShRGupFUF0XeANZpOXQ%2BZ8g2D79Xwo%2FLtP15uQS8iet85a9IM4aQxQV%2B0kkwndI8xM7IWKN%2BCWHS45B2SkEL1RH1R5l80XDPIPr7ycSeHl8Mreij5dbifyKnrSkKcfqbuNB8XUx8rNakRkfMdwwDyq61ENCUgU%2FYZjY2Jm1TlyDrt75EltZMyAPEtXj4pnU2%2Fl4QADHIBKt6XepittIb3%2F4ag3bClHRnSHcBVrN8ye4W%2B50eoExU0gyI7tteT6o7KGgKQhZ3osGSUSPzpVhEGLPDEe0jrs4sakkCXp0X65OQyoVT3zNtcJBs0lZw9a5h8XKAEOW%2FcBwBBgSsBcIWKq2ePrf04uZyTvN81jtDPlzCPGtvLkFthWLmUvQqXPHBn208OdeDukweWDlmhboEJA%2FiB%2BhOGKtHMsG5U9m7pKggo%2BoR64MGhWhYFb3OTpWNHpMhziqOhZ0fZgdutdDpucReUyZSCXYenGFcwcm%2BXHN1KlZO9LIA5Ha6jYNNmhQRijo6cVIHC2irvwEF%2FHhbo%2FHUMODUw8kGOqUBTCOC%2Btzp3fZSq9RJx4UBdhO%2FSz6WA8zb9weGWhr%2Fehz%2FYf7PWpdVv5FRPbBSrrjYYuu59aICPxaakMKYdSSWbs3NHuzdQB3jsS%2BhreiaL8WAqPkQTAMpeMRt1514aadBuUyuJ5GyEeEvZu1wbjm%2F4qAq1Q5yXuM1F6qWBKt7%2F3SbANb5G7c%2B8jgR9KUYal2A%2BXyixDzqsLuC3zHQR32thnAMvcIC&X-Amz-Signature=1b1d508d89f445cf84cc515ac72f582dc3de192d254ee2fcaefff1248a113765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBOLDIIU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIATDINAjuJoOAnlUrK%2B1RBIZr8%2BAoDq28duf9CXiiXlcAiEA0EH%2FGeu26CYU76i0R706Qa3%2Fmyt5%2BVFGQVz1SaQm9zAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKrna7TV2CZYq2ZJGyrcA%2BMthuczqljL0cFAzQlDBjxThtNEwMM1YWcA63ONCq4MMMEAhJTPvoj4iMqIvs3q5%2B7bsCeB4%2BZnfajjSoDwMHogXtSfd0cPXLaxShRGupFUF0XeANZpOXQ%2BZ8g2D79Xwo%2FLtP15uQS8iet85a9IM4aQxQV%2B0kkwndI8xM7IWKN%2BCWHS45B2SkEL1RH1R5l80XDPIPr7ycSeHl8Mreij5dbifyKnrSkKcfqbuNB8XUx8rNakRkfMdwwDyq61ENCUgU%2FYZjY2Jm1TlyDrt75EltZMyAPEtXj4pnU2%2Fl4QADHIBKt6XepittIb3%2F4ag3bClHRnSHcBVrN8ye4W%2B50eoExU0gyI7tteT6o7KGgKQhZ3osGSUSPzpVhEGLPDEe0jrs4sakkCXp0X65OQyoVT3zNtcJBs0lZw9a5h8XKAEOW%2FcBwBBgSsBcIWKq2ePrf04uZyTvN81jtDPlzCPGtvLkFthWLmUvQqXPHBn208OdeDukweWDlmhboEJA%2FiB%2BhOGKtHMsG5U9m7pKggo%2BoR64MGhWhYFb3OTpWNHpMhziqOhZ0fZgdutdDpucReUyZSCXYenGFcwcm%2BXHN1KlZO9LIA5Ha6jYNNmhQRijo6cVIHC2irvwEF%2FHhbo%2FHUMODUw8kGOqUBTCOC%2Btzp3fZSq9RJx4UBdhO%2FSz6WA8zb9weGWhr%2Fehz%2FYf7PWpdVv5FRPbBSrrjYYuu59aICPxaakMKYdSSWbs3NHuzdQB3jsS%2BhreiaL8WAqPkQTAMpeMRt1514aadBuUyuJ5GyEeEvZu1wbjm%2F4qAq1Q5yXuM1F6qWBKt7%2F3SbANb5G7c%2B8jgR9KUYal2A%2BXyixDzqsLuC3zHQR32thnAMvcIC&X-Amz-Signature=18c93d11e361e2877df71db0d5ba010da6a9df5ac2754c35d8ea4382de26a8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

