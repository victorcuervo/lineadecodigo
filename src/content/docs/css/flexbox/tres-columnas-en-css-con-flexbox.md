---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4HAXIT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHCxdFuXlYAbafrN10yAcYT7KreHq%2BfCe5Eg6P%2F9E3AiEA648HBT1a%2FXyfxg8m%2FhVz5pLllUVCYtZbNru3QiWJg2Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL13YJtAXf5uy7BrUSrcA%2BALhvIYdfLp3k3H%2FxYi4%2BWBy1jwYTYmF868OQOgOwBxLZY9g7%2FHzohHg6KkyySGleL%2FmYLkvHntYbkydZey1hPaprbHuTPcIUcqCAPRaQzCl0dTZZR2pQkveag7seZchBtdmPCvgn0MqQP9rZ933hwI%2BBRyCJi%2Fb7XcP9KcA9qYn82jii3SZklESr031AP%2Bj71RUymwUmotVRPsvh2WJzIxISYey82YH9WHiMeQpiaXsZa1I%2BXkzTokQ3RlDrK4vGpy8qNYx6vhbkTzbRzfLOBRlZbnBGpQSyelzjZUwrchx%2FKNnRvnRLEdz0r4KTfSvp2aCFnw6WC1L%2B2rGrN1bgrNF9uEgM0OReZa%2FD7Pm1koi6usYeuEsuIcIr0%2Bs6EQLQGgbbxnSuqamVTer01RgmUU5njRAcLzpdUD5W0R1mgloguC6g7hlg6VPpfNt%2BitI7D7yeBw6wFHoeTEcAcvMc92UKiB8QRKFd4QTfGxQJpxmHAtOvRUMJSmIu4wKy44cSYfA05zulUBzXzpf4qcQelcxqyJTsjg94ASOSNPFgzDBTcBAOFY0Xsi3uOLXZpE5K5Tt%2Bs7eyYhczvq7GY6RlfPWagRVa5spMsyCAc8vJlQ7YuNW9c0DK3iqNpNMMzPyskGOqUBHCudhz%2BmcJtgM7zCUo1oPSPQGeqQ9Qr6Fc%2Fg5p9jwJsXZQj9bNmzHM23%2Fs6Jy2dyG4T4PcIJHS2T1N8cMPeguUr7sw2PCZy%2FPcZ8WFGqRcxcb2ERUQytkt4o7zFQMzel7Pr%2BspF1rtaIyVtRmoBySj5SHZ2yIaVVPpcgxY7eO67qCp1bAwamvk6LtsIYchZSuVxzj5yBId0t%2B8ZE0Ig5AcSwm9e7&X-Amz-Signature=bfc88a0d66efe14c3418e539aaf138cb362836bd1104095ff63332bd495b3655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4HAXIT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHCxdFuXlYAbafrN10yAcYT7KreHq%2BfCe5Eg6P%2F9E3AiEA648HBT1a%2FXyfxg8m%2FhVz5pLllUVCYtZbNru3QiWJg2Iq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDL13YJtAXf5uy7BrUSrcA%2BALhvIYdfLp3k3H%2FxYi4%2BWBy1jwYTYmF868OQOgOwBxLZY9g7%2FHzohHg6KkyySGleL%2FmYLkvHntYbkydZey1hPaprbHuTPcIUcqCAPRaQzCl0dTZZR2pQkveag7seZchBtdmPCvgn0MqQP9rZ933hwI%2BBRyCJi%2Fb7XcP9KcA9qYn82jii3SZklESr031AP%2Bj71RUymwUmotVRPsvh2WJzIxISYey82YH9WHiMeQpiaXsZa1I%2BXkzTokQ3RlDrK4vGpy8qNYx6vhbkTzbRzfLOBRlZbnBGpQSyelzjZUwrchx%2FKNnRvnRLEdz0r4KTfSvp2aCFnw6WC1L%2B2rGrN1bgrNF9uEgM0OReZa%2FD7Pm1koi6usYeuEsuIcIr0%2Bs6EQLQGgbbxnSuqamVTer01RgmUU5njRAcLzpdUD5W0R1mgloguC6g7hlg6VPpfNt%2BitI7D7yeBw6wFHoeTEcAcvMc92UKiB8QRKFd4QTfGxQJpxmHAtOvRUMJSmIu4wKy44cSYfA05zulUBzXzpf4qcQelcxqyJTsjg94ASOSNPFgzDBTcBAOFY0Xsi3uOLXZpE5K5Tt%2Bs7eyYhczvq7GY6RlfPWagRVa5spMsyCAc8vJlQ7YuNW9c0DK3iqNpNMMzPyskGOqUBHCudhz%2BmcJtgM7zCUo1oPSPQGeqQ9Qr6Fc%2Fg5p9jwJsXZQj9bNmzHM23%2Fs6Jy2dyG4T4PcIJHS2T1N8cMPeguUr7sw2PCZy%2FPcZ8WFGqRcxcb2ERUQytkt4o7zFQMzel7Pr%2BspF1rtaIyVtRmoBySj5SHZ2yIaVVPpcgxY7eO67qCp1bAwamvk6LtsIYchZSuVxzj5yBId0t%2B8ZE0Ig5AcSwm9e7&X-Amz-Signature=098775fe9903d3f3139bd7225c35e6e7f83af260905f761bd518c763aca9aaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

