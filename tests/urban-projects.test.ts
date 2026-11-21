import { describe, expect, test } from "bun:test";
import { findUrbanProject } from "../src/data/urban-projects";

describe("Données des documents CUY", () => {
  test("Le prêt PCADY annoncé est de 23,6 milliards FCFA", () => {
    expect(findUrbanProject("pcady")?.budget).toBe(23600000000);
  });
  test("Le PDVIR compte 11 tronçons totalisant 14 915 mètres", () => {
    const roads = findUrbanProject("pdvir")?.roads;
    expect(roads?.flatMap((group) => group.rows).length).toBe(11);
    expect(roads?.map((group) => group.rows.reduce((sum, row) => sum + row.meters, 0))).toEqual([9292, 5623]);
  });
  test("Le PDVIR est financé à hauteur de 12,2 milliards FCFA", () => {
    expect(findUrbanProject("pdvir")?.budget).toBe(12200000000);
  });
  test("Cœur de Ville distingue 49,2 milliards AFD et 5,6 milliards État", () => {
    const project = findUrbanProject("yaounde-coeur-de-ville");
    expect(project?.financing?.map((source) => source.amount)).toEqual([49200000000, 5600000000]);
    expect(project?.financing?.reduce((sum, source) => sum + source.amount, 0)).toBe(project?.budget);
  });
  test("Mvog-Mbi reprend le montant annuel numérique du contrat", () => {
    expect(findUrbanProject("precollecte-mvog-mbi")?.budget).toBe(19155720);
    expect(1596310 * 12).toBe(findUrbanProject("precollecte-mvog-mbi")?.budget);
  });
});