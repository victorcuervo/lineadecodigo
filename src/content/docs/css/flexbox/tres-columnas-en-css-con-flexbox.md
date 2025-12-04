---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGW7UG6P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICIQgI8xZK9T7AfEnH9jCO%2B40t1ig5b1QnynxAyko48rAiBSu%2BpdM6kWx9j0WQps45UfdX35IM42Iksswvx2t6WPKyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMevDsEmrF4W0m6c4RKtwD6USV0b3qLW%2B3GLsajPGvLAKreFXm8X52KeqU9C7BPQ%2FpZqX9jvBwYvIszfBPyd8KwYHhH0hupIQpdsneTg2KdJMknbr%2BUYTQBYqUKX6WcRkXfamN7qmb5AsczfIKIbmulXAgQSdBLwrDoQ7kvjk1MMDJn%2BySZ%2BGJD09cZmQW9LxlAcMtaA%2BT1IXY%2FVOaJ6mWdRQ9cAmyXROGUiTniqUoherxL%2FPGHCqxVh60u%2FEchzVcbo%2Bo80iCJ4HXW86jz1XV3MJua0BnHYTX5U4gtxCqxmoGrcU5MU1djuA3wuT8%2FBT1Ymrjb4tUG7cT9q67h4FzUohdDZdZnPAMqiCCOM3aD2Uc%2Flb8yyDS1dlW%2BW2bZ%2BjqKoSGHH%2FaRpQwhufojqlnx2OzKlC9IWBMp308eiXKS7UIDZJ4c1ckZKUa9RiQzw66sWN%2BCuMuO%2BaS307ZRNeyI5wBBpD0%2FwnZkQUdY5qXjz%2BZ1bnvaxxzi1f3eeYltSNH0sd0rm9OVXnlCtOJuXGWdX3dcCbYoI7kD5Pm%2BPDBpm7AH1DHtDggSDlNe8i45xKn6U2%2BNCrXvCx2wL9HTXoYmsk9gBJfKa4q4b%2Fm3xFhBWyCxuRIwpKkd2qWtkhyZ0ZoL7hiDgY5outbf7cwh%2FPDyQY6pgGWoGiYsgGMQNOu7toq8L6y8JKjUamOsD3UZ1gx4VoiEFONtI2%2BW7byJsgPFYXwQvVl9dbF6ypzatE60VAZ%2BoqnLLKzVBzwmk%2FVGn5hdQEt%2FeROP843ZtxSNJpUzZipNJEMY5wf9uethqkp7jup%2FFb4Ce3uuN3qDALCm2hIXNfRs%2BLh35tmwvgaQF6nySx%2FHjX5XDQDqKVZ7VcNDyJrubVUw0BJ8yV8&X-Amz-Signature=e3b62f8878140346a56adf2ade307f2770fdbc8709a1bed1d3001bf0c984d29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGW7UG6P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICIQgI8xZK9T7AfEnH9jCO%2B40t1ig5b1QnynxAyko48rAiBSu%2BpdM6kWx9j0WQps45UfdX35IM42Iksswvx2t6WPKyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMevDsEmrF4W0m6c4RKtwD6USV0b3qLW%2B3GLsajPGvLAKreFXm8X52KeqU9C7BPQ%2FpZqX9jvBwYvIszfBPyd8KwYHhH0hupIQpdsneTg2KdJMknbr%2BUYTQBYqUKX6WcRkXfamN7qmb5AsczfIKIbmulXAgQSdBLwrDoQ7kvjk1MMDJn%2BySZ%2BGJD09cZmQW9LxlAcMtaA%2BT1IXY%2FVOaJ6mWdRQ9cAmyXROGUiTniqUoherxL%2FPGHCqxVh60u%2FEchzVcbo%2Bo80iCJ4HXW86jz1XV3MJua0BnHYTX5U4gtxCqxmoGrcU5MU1djuA3wuT8%2FBT1Ymrjb4tUG7cT9q67h4FzUohdDZdZnPAMqiCCOM3aD2Uc%2Flb8yyDS1dlW%2BW2bZ%2BjqKoSGHH%2FaRpQwhufojqlnx2OzKlC9IWBMp308eiXKS7UIDZJ4c1ckZKUa9RiQzw66sWN%2BCuMuO%2BaS307ZRNeyI5wBBpD0%2FwnZkQUdY5qXjz%2BZ1bnvaxxzi1f3eeYltSNH0sd0rm9OVXnlCtOJuXGWdX3dcCbYoI7kD5Pm%2BPDBpm7AH1DHtDggSDlNe8i45xKn6U2%2BNCrXvCx2wL9HTXoYmsk9gBJfKa4q4b%2Fm3xFhBWyCxuRIwpKkd2qWtkhyZ0ZoL7hiDgY5outbf7cwh%2FPDyQY6pgGWoGiYsgGMQNOu7toq8L6y8JKjUamOsD3UZ1gx4VoiEFONtI2%2BW7byJsgPFYXwQvVl9dbF6ypzatE60VAZ%2BoqnLLKzVBzwmk%2FVGn5hdQEt%2FeROP843ZtxSNJpUzZipNJEMY5wf9uethqkp7jup%2FFb4Ce3uuN3qDALCm2hIXNfRs%2BLh35tmwvgaQF6nySx%2FHjX5XDQDqKVZ7VcNDyJrubVUw0BJ8yV8&X-Amz-Signature=d951813be235906b1563f58f231a465f8a4a5de433abeec94475c77e6694f7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

