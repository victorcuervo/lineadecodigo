---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNUZDNO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCNTLwSi6Qtuq1lT46C7kcUIL2SyM9Qp8TZWoeJOYq%2BNAIgECW9RkZKk2FSO6HNR%2B7gzm%2BbUl4zmZUVo5jJLCtVNbIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKoCxIHcC0nIZIPngyrcA4yml%2FCJaF9td8sMN63g5219kTVcAzkHIRXdXNc6%2BE7jj8rFAF%2BjtiUPE626ZwvqY4ZfNkM4%2B8rxZoCc3905pvaG7VHPHxdkkl4onMoUFS%2F%2FaltS3QADPK%2Fbj%2F%2FQ5Hs%2BbkWnXdz%2F7K%2FxVzacllnqLKl%2BomVPgIgej0lP6KvZkqOFzCNn4d88tpALMeWhyIRVZkxALWZC5hdnE5hSI%2FRZDrr1jRRjI5MzLKrTUJAP%2FfvTlqZgAU5GBWANUF%2FQM7Bo49yartQ754u0SDdVkPK446UMZFOxvY9wtGZrKMsUNIZBGd0Nphpgi90q1CFynZQy2Ru7AHwK93hfvNgaihSlC6HRe%2BnHBEVOiXjq7UzZU8vqc8fZRb4P6A6SuS%2FZ1VxAPrpqAvgWiCIi%2BFC2a%2B%2BQwr0eYkci00M51ImbfNpWr2sEPpvK80vlDa6s%2FtyjwvYWUkQV4enW7vQgCt%2BDg18SR7VsIcT%2Fdg3VOURxn47947l2YEvIJFlzSXRUWQMfgJUt3ZPxGaHO%2BXfP3YiHUtEI9GfkKn75w7lqIjEj2bWZcmjFoE1llFCPjPO7TgDaghOuH%2Fr3wI9ZUVnyJq0S94dW6oLC5VsmRBzN0FFpfTgkenwVyuNOyctPuBK2cciGMOznxckGOqUBtpj4cWNCmVes50e5yxC%2Fhaw9ErxZuTeDvI2KWOcf04KURmr1OBEHVrE7XWMscgytvPiVXAu9EQ%2F4eIbgZ%2BVeG4s9GPjTjkG%2BORmfkz%2FcgPtlrxgsgSDNQudQqKWJqZz%2FV%2BVWkYXtBoQY4S02jSLpxXqG%2Bl3SbgeWTk26otV1G5G6gM2nvJrMleRCMXLhCxkggoY1LixKv42GsyHcrR7mmi1%2FVDPb&X-Amz-Signature=0eb01b3dff67279fd51a883144fce0d1699ffaf4830f2793755c11bb730970b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNUZDNO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCNTLwSi6Qtuq1lT46C7kcUIL2SyM9Qp8TZWoeJOYq%2BNAIgECW9RkZKk2FSO6HNR%2B7gzm%2BbUl4zmZUVo5jJLCtVNbIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDKoCxIHcC0nIZIPngyrcA4yml%2FCJaF9td8sMN63g5219kTVcAzkHIRXdXNc6%2BE7jj8rFAF%2BjtiUPE626ZwvqY4ZfNkM4%2B8rxZoCc3905pvaG7VHPHxdkkl4onMoUFS%2F%2FaltS3QADPK%2Fbj%2F%2FQ5Hs%2BbkWnXdz%2F7K%2FxVzacllnqLKl%2BomVPgIgej0lP6KvZkqOFzCNn4d88tpALMeWhyIRVZkxALWZC5hdnE5hSI%2FRZDrr1jRRjI5MzLKrTUJAP%2FfvTlqZgAU5GBWANUF%2FQM7Bo49yartQ754u0SDdVkPK446UMZFOxvY9wtGZrKMsUNIZBGd0Nphpgi90q1CFynZQy2Ru7AHwK93hfvNgaihSlC6HRe%2BnHBEVOiXjq7UzZU8vqc8fZRb4P6A6SuS%2FZ1VxAPrpqAvgWiCIi%2BFC2a%2B%2BQwr0eYkci00M51ImbfNpWr2sEPpvK80vlDa6s%2FtyjwvYWUkQV4enW7vQgCt%2BDg18SR7VsIcT%2Fdg3VOURxn47947l2YEvIJFlzSXRUWQMfgJUt3ZPxGaHO%2BXfP3YiHUtEI9GfkKn75w7lqIjEj2bWZcmjFoE1llFCPjPO7TgDaghOuH%2Fr3wI9ZUVnyJq0S94dW6oLC5VsmRBzN0FFpfTgkenwVyuNOyctPuBK2cciGMOznxckGOqUBtpj4cWNCmVes50e5yxC%2Fhaw9ErxZuTeDvI2KWOcf04KURmr1OBEHVrE7XWMscgytvPiVXAu9EQ%2F4eIbgZ%2BVeG4s9GPjTjkG%2BORmfkz%2FcgPtlrxgsgSDNQudQqKWJqZz%2FV%2BVWkYXtBoQY4S02jSLpxXqG%2Bl3SbgeWTk26otV1G5G6gM2nvJrMleRCMXLhCxkggoY1LixKv42GsyHcrR7mmi1%2FVDPb&X-Amz-Signature=0e9a1c34e8af35e5caf070cce5eb1e98f2fc3a16609d8806d1972550467c07b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

