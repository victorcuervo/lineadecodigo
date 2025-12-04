---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MTKL4LZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEPf8GJQez8wMO49kbDFMOk61HXKg4%2BRmN%2Bf6vx%2B1t1kAiEAqZkSBR9iEvAVk28RnpvJzzvN2TRFU%2FYMgZRMOnfofAMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPUaLk6RD%2B8qy9JKgircA3ptgTw4DQMt1ERSkJGTq4hAkGTcv4CQANyhHND7LMN%2FP%2F6ElqkT9Q%2FWgqaF3MgGMBSPGes%2F%2BsAs2z1bniuBKLiokaYrvpkhFX5pfajQAF1ovLEc3aAlili1z5N2FuogC4ckumsfwg6lBNlqzDSqU6E61pMyW2X0c601AusMzu2vNcttGqB7uqZ0IEZxBzZmfxOFg7H6a%2FddFIOZhshER5sCeylUd6mqZj28TMpQB%2B%2FUlq3Uooe%2FdGyCO58%2FKVPuGDhBnUCJMmKuOGKvGZq4%2BIperm9tMD99ynf2o59aUNbzElFv%2FlRvQEcmE1u2BfihbxuwjZECOy7mrXfG99tOxoRRDkp7UL2pVBaSd6kp5dJAbXc%2BFCerJfN8AwVPzgVttRwfr40ap0x0eVnqmSJw6jJpbWGbycaZ489hsxBQQnhnYeR9FTGUVBueu1k5ahi9i0l5XqGoSuhcHJ4XCO34KR%2FhWnoG5ZkB9qEjUzILCoTgBoertfm6sZgPvmw6vJzuBTmv13SyUiPtadkleNszMyJjcnAuY1FxTSfmW4VZu%2Fb2aHvXNV2ge37D6QSNkfkJDeH1TYQEJObpdK7jo4V0mSruGrCHWe55c8RDFxLkIwtFSEaqBSFl3cC4eOxzMMSFxckGOqUBo8Z3xy0wZt%2BYszkpUIVwxXnVkaJCRJC4KOrzxwtRVSFS%2B5KljlKMs7O%2BJHvJ%2B4UBe5uLofZHMOqG0IhcoVOzUC%2FeRajG72bkf3PhwBd7o6H3%2B4%2FIa3zjdxzWwoShqoKo7SD4F%2Bs7jcD%2BLl05JDyDW9pnHXOx5nMWyLhEq66Dn5BSXlrFa353IrX5j24MnxI6dcwdiFOFZYN5Kfp%2FuopHSxgaP%2FUG&X-Amz-Signature=86744c688fb34df788162c5ef2ae5445a542819e37d480aaf4474e092b608373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MTKL4LZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEPf8GJQez8wMO49kbDFMOk61HXKg4%2BRmN%2Bf6vx%2B1t1kAiEAqZkSBR9iEvAVk28RnpvJzzvN2TRFU%2FYMgZRMOnfofAMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPUaLk6RD%2B8qy9JKgircA3ptgTw4DQMt1ERSkJGTq4hAkGTcv4CQANyhHND7LMN%2FP%2F6ElqkT9Q%2FWgqaF3MgGMBSPGes%2F%2BsAs2z1bniuBKLiokaYrvpkhFX5pfajQAF1ovLEc3aAlili1z5N2FuogC4ckumsfwg6lBNlqzDSqU6E61pMyW2X0c601AusMzu2vNcttGqB7uqZ0IEZxBzZmfxOFg7H6a%2FddFIOZhshER5sCeylUd6mqZj28TMpQB%2B%2FUlq3Uooe%2FdGyCO58%2FKVPuGDhBnUCJMmKuOGKvGZq4%2BIperm9tMD99ynf2o59aUNbzElFv%2FlRvQEcmE1u2BfihbxuwjZECOy7mrXfG99tOxoRRDkp7UL2pVBaSd6kp5dJAbXc%2BFCerJfN8AwVPzgVttRwfr40ap0x0eVnqmSJw6jJpbWGbycaZ489hsxBQQnhnYeR9FTGUVBueu1k5ahi9i0l5XqGoSuhcHJ4XCO34KR%2FhWnoG5ZkB9qEjUzILCoTgBoertfm6sZgPvmw6vJzuBTmv13SyUiPtadkleNszMyJjcnAuY1FxTSfmW4VZu%2Fb2aHvXNV2ge37D6QSNkfkJDeH1TYQEJObpdK7jo4V0mSruGrCHWe55c8RDFxLkIwtFSEaqBSFl3cC4eOxzMMSFxckGOqUBo8Z3xy0wZt%2BYszkpUIVwxXnVkaJCRJC4KOrzxwtRVSFS%2B5KljlKMs7O%2BJHvJ%2B4UBe5uLofZHMOqG0IhcoVOzUC%2FeRajG72bkf3PhwBd7o6H3%2B4%2FIa3zjdxzWwoShqoKo7SD4F%2Bs7jcD%2BLl05JDyDW9pnHXOx5nMWyLhEq66Dn5BSXlrFa353IrX5j24MnxI6dcwdiFOFZYN5Kfp%2FuopHSxgaP%2FUG&X-Amz-Signature=939be0ae69dacf32ffb2e05018a9543d71c39b92f889fea9497ad5ff63890286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

