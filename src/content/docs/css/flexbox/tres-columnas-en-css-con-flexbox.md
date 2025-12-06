---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO5RS7W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqQXKcPtQ%2F1f9jmDSfmRjbo%2BlNROuSK06xDlHB3Y9HwAiEA97pM%2FUFutWWJ%2BAL7BwlpSijhrDxhVdNFUJ%2BxFktARAYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLL3mYCxpQxPl2LHvCrcA7TQHXo1P2ghy3Y6eOx1DIuffgaXd9g6Pz0oSIXCJDYdCgWamndQbL%2BPga%2Bk8I5rT3fCt4hDoo%2FUzsk2DOPw%2B0ba9A5aSbrqYuJ5994YWVoWA8P1vq1aIRdpbs5ixVggM%2Be0EmqeKESaPlG%2FvmWoLI643lsjl5xtixYGiZsquo6nrEty8YehC8xruhkTG1aGBG7jARRni0lIA3Nxwd2GTNswyoSPR78XuMlx4CMtD%2FUT37DbqJDkdg%2F7dOinFRv%2BjIEr9nwmA2MYFd5YflkQz2DIGVa47%2BR3AhpYbtjdjy3MuOex72oZmv6ExckyfCnv56Hg0napMQcXYGRoj1OXkFwOPeU4KQqyH3rQKQ%2Br3NMe5P4mD5Lza1igYgl0vR%2BU6%2FKy%2FrCk%2FDnuS%2B3qR3%2BcgU7ItxnLT6BUGCKSxxlTF9v1LPw0mKHkJvcMqKAN09p86EAbqS9tEESW66y96kjIUYVMMphbVWRg4D3tS6KLZfnliCo67JiLlXZkaLTbIWGqW1ptc8EHVeggczElsGr5xEEt0arn%2FbE6hSVxm6ayCZE%2B%2FANo0oLBmYAos%2FubcXxtHsXRyqBxbChUwPS71Q%2BHyClDZWCBX%2FoRjfDEfiG0UlbwKmtz346%2Bb9O9qweXMIu8z8kGOqUBqYa6LNLqH5hndRhIVXZ5G2dgyucyyI5OfOLYrlbPN%2BANRJpUl9M6nEe4QNsoZ4X1XTAelJ%2F9w3X9hUxEvMgFRN8xUT7pV%2F2JSLccW6Y5H%2B%2FuQAzBFXHvnHS3gL%2BtNZi3Jcj%2B%2FqsG15V0Xi710o03GoL4Dk06W3bdTef1QG4fguZ8iPfwK3qBz%2FGfvPl1rdbwg9VTRWS7yA5o436VOA4jR%2Bp4jNpI&X-Amz-Signature=4025b29b4d869cfcc41985fe4a6b7c59bf9de4ec74100b7b978360118fd208c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO5RS7W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqQXKcPtQ%2F1f9jmDSfmRjbo%2BlNROuSK06xDlHB3Y9HwAiEA97pM%2FUFutWWJ%2BAL7BwlpSijhrDxhVdNFUJ%2BxFktARAYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLL3mYCxpQxPl2LHvCrcA7TQHXo1P2ghy3Y6eOx1DIuffgaXd9g6Pz0oSIXCJDYdCgWamndQbL%2BPga%2Bk8I5rT3fCt4hDoo%2FUzsk2DOPw%2B0ba9A5aSbrqYuJ5994YWVoWA8P1vq1aIRdpbs5ixVggM%2Be0EmqeKESaPlG%2FvmWoLI643lsjl5xtixYGiZsquo6nrEty8YehC8xruhkTG1aGBG7jARRni0lIA3Nxwd2GTNswyoSPR78XuMlx4CMtD%2FUT37DbqJDkdg%2F7dOinFRv%2BjIEr9nwmA2MYFd5YflkQz2DIGVa47%2BR3AhpYbtjdjy3MuOex72oZmv6ExckyfCnv56Hg0napMQcXYGRoj1OXkFwOPeU4KQqyH3rQKQ%2Br3NMe5P4mD5Lza1igYgl0vR%2BU6%2FKy%2FrCk%2FDnuS%2B3qR3%2BcgU7ItxnLT6BUGCKSxxlTF9v1LPw0mKHkJvcMqKAN09p86EAbqS9tEESW66y96kjIUYVMMphbVWRg4D3tS6KLZfnliCo67JiLlXZkaLTbIWGqW1ptc8EHVeggczElsGr5xEEt0arn%2FbE6hSVxm6ayCZE%2B%2FANo0oLBmYAos%2FubcXxtHsXRyqBxbChUwPS71Q%2BHyClDZWCBX%2FoRjfDEfiG0UlbwKmtz346%2Bb9O9qweXMIu8z8kGOqUBqYa6LNLqH5hndRhIVXZ5G2dgyucyyI5OfOLYrlbPN%2BANRJpUl9M6nEe4QNsoZ4X1XTAelJ%2F9w3X9hUxEvMgFRN8xUT7pV%2F2JSLccW6Y5H%2B%2FuQAzBFXHvnHS3gL%2BtNZi3Jcj%2B%2FqsG15V0Xi710o03GoL4Dk06W3bdTef1QG4fguZ8iPfwK3qBz%2FGfvPl1rdbwg9VTRWS7yA5o436VOA4jR%2Bp4jNpI&X-Amz-Signature=2050abebed2ea3b9f3b92ba6c9b6fbcfe464affaf32862bb5ded68e59060c1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

