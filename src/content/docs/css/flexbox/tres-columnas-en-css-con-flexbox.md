---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUA446L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGGqx6IL%2BcyYJhyQyVaZK8ilqIMk9hwDzPFyF66PjHlnAiEAxWrXWwylW%2Bh9c7liTTNM11m53ACUElhlVJXAVpzyWbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPm5AUJ6X0QHxW%2FbeSrcA6ENduHQeXR%2BkTTFAa38xNbzrnOFv0oxtld2Lvdu2efHJ5OuPP6Xg%2B6e%2Fajkw8%2BYrGowMhvAdYOcaq9FYf7%2FYh76sBoqAoTXEq1qm42QbMbyQUUjmWrJNXuxueSMIwxzpjwU4mNs3fDSC27CdONcloWOjWtENN30Po5mHwUo1iHjfBLokbNZANu6vIXo7fr%2Ffqwmb2PLe0mPWH5uQR70uXvKSakQ9W3jd7FgxFl7Z2GzrCwxCYxteaIaM46pxc1Yy2slAOYmdiltpQLmuklh3%2FZ%2BYCD%2FtiJRE03CaYQetKTiQ%2FvZHj0kxNA1j6EPX%2BRwOEy3wiRm59ZaA3x0r3CUdisk9T0zYm329hcOSo54lq8Uy7jPA420fncSvr59RYp%2BGjtCg0DH2DKYiXpC1%2BOu5Efx83NXLb8RxTb31%2FIER%2BpL56v9toT22CA80zP1vkXV7wEj0qGKa%2BqI5pv7cvXudqSuwUwZBU%2Bnw2iPU1jXfSxPI5E0ChZFPi2tpNr7UGWw1j%2FBhabDz%2BmTnemW0hqn3Fi%2FhQ8sW17hjgLg3s%2FlkEW7Lt1mDWHDsY9Ee1fBVvA%2FclUoJVm1KuW6atb1rVqNpOxALxZPfvEA5vNrrwV125dbVWIcXpyfMJ8IWB8OMP3mxckGOqUBb7YWX1ZriuBCYgPIEugjhhM5ypZwkU39RgFiNLN99qUNZ5AJzddHQgyzQE9sVpSDJ8Si5n3cxtz%2FTK0hclwOb2R6nJcLVuxWqKT67rsC2jnKcGaIK3kz8%2BQjmoE7PzemReGddVnJ4j1eL7SCyOM6mlRVoahH49PwdtmIg7xZ0Bn1UbFWM3kd7DjbG1CUIzxZk8NS2Dn%2BemTNPxg6qQ7DXAbDcApv&X-Amz-Signature=c21e810a036a8d172823bd7af6ed53664a4242a2192bfa6170be4c3502820424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDUA446L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGGqx6IL%2BcyYJhyQyVaZK8ilqIMk9hwDzPFyF66PjHlnAiEAxWrXWwylW%2Bh9c7liTTNM11m53ACUElhlVJXAVpzyWbkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPm5AUJ6X0QHxW%2FbeSrcA6ENduHQeXR%2BkTTFAa38xNbzrnOFv0oxtld2Lvdu2efHJ5OuPP6Xg%2B6e%2Fajkw8%2BYrGowMhvAdYOcaq9FYf7%2FYh76sBoqAoTXEq1qm42QbMbyQUUjmWrJNXuxueSMIwxzpjwU4mNs3fDSC27CdONcloWOjWtENN30Po5mHwUo1iHjfBLokbNZANu6vIXo7fr%2Ffqwmb2PLe0mPWH5uQR70uXvKSakQ9W3jd7FgxFl7Z2GzrCwxCYxteaIaM46pxc1Yy2slAOYmdiltpQLmuklh3%2FZ%2BYCD%2FtiJRE03CaYQetKTiQ%2FvZHj0kxNA1j6EPX%2BRwOEy3wiRm59ZaA3x0r3CUdisk9T0zYm329hcOSo54lq8Uy7jPA420fncSvr59RYp%2BGjtCg0DH2DKYiXpC1%2BOu5Efx83NXLb8RxTb31%2FIER%2BpL56v9toT22CA80zP1vkXV7wEj0qGKa%2BqI5pv7cvXudqSuwUwZBU%2Bnw2iPU1jXfSxPI5E0ChZFPi2tpNr7UGWw1j%2FBhabDz%2BmTnemW0hqn3Fi%2FhQ8sW17hjgLg3s%2FlkEW7Lt1mDWHDsY9Ee1fBVvA%2FclUoJVm1KuW6atb1rVqNpOxALxZPfvEA5vNrrwV125dbVWIcXpyfMJ8IWB8OMP3mxckGOqUBb7YWX1ZriuBCYgPIEugjhhM5ypZwkU39RgFiNLN99qUNZ5AJzddHQgyzQE9sVpSDJ8Si5n3cxtz%2FTK0hclwOb2R6nJcLVuxWqKT67rsC2jnKcGaIK3kz8%2BQjmoE7PzemReGddVnJ4j1eL7SCyOM6mlRVoahH49PwdtmIg7xZ0Bn1UbFWM3kd7DjbG1CUIzxZk8NS2Dn%2BemTNPxg6qQ7DXAbDcApv&X-Amz-Signature=8a64dcb2be25fd84249a996b532b58609390f88eae50c39954ffca2ad1b9d579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

